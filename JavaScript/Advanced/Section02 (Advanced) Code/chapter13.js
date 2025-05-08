/*
  1. Promise 객체 생성
    - new Promise() 객체 생성자를 사용해 Promise 객체 생성
    - 인자로는 실행 할 Callback 함수
    - 또한, 인자로 resolve, reject 전달 가능 (resolve : 비동기 작업 성공, reject : 비동기 작업 실패)
*/
const promise = new Promise((resolve, reject) => {
  // resovle : Promise 작업, 즉 비동기 작업을 성공 상태로 바꾸는 함수
  // reject : Promise 작업, 즉 비동기 작업을 실패 상태로 바꾸는 함수
  // 비동기 작업 실행하는 함수 : Executor

  setTimeout(() => {
    console.log("안녕!");
    resolve("안녕"); // 비동기 작업이 성공으로 실행되면, resolve() 호출
  }, 2000);
});

/* 
[[Prototype]] : Promise
[[PromiseState]] : "pending"
[[PromiseResult]] : undefined
*/
console.log(promise); // Promise 객체 정보 출력 (비동기 작업 전 출력)

/* 
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : undefined (결과 값은 Executor 함수 내부에서 resolve 함수를 호출하면서 인수로 전달해줘야 함)
                    -> "안녕"
*/
setTimeout(() => {
  console.log(promise);
}, 3000);

const promise1 = new Promise((resolve, reject) => {
  // resovle : Promise 작업, 즉 비동기 작업을 성공 상태로 바꾸는 함수
  // reject : Promise 작업, 즉 비동기 작업을 실패 상태로 바꾸는 함수
  // 비동기 작업 실행하는 함수 : Executor

  setTimeout(() => {
    console.log("안녕!");
    // reject() 이므로 chapter13.js:42 Uncaught (in promise) 실패한 이유는? 출력
    reject("실패한 이유는?"); // 비동기 작업이 성공으로 실행되면, resolve() 호출
  }, 2000);
});

/* 
[[Prototype]] : Promise
[[PromiseState]] : "rejected"
[[PromiseResult]] : "실패한 이유는?"
*/
setTimeout(() => {
  console.log(promise1);
}, 3000);

/*
  2. Promise 활용
*/
const promise2 = new Promise((resolve, reject) => {
  // resovle : Promise 작업, 즉 비동기 작업을 성공 상태로 바꾸는 함수
  // reject : Promise 작업, 즉 비동기 작업을 실패 상태로 바꾸는 함수
  // 비동기 작업 실행하는 함수 : Executor

  setTimeout(() => {
    const num = 10;
    // const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

/*
  3. Promise의 결과값을 이용하는 방법 : Promise.then(callback), Promise.catch(callback) 사용
    - 성공의 경우 (Solve) : Promise가 성공하게 되면 (Execute 함수에서 resolve()를 호출하게 되면), 이후 then 메서드에 전달한 콜백함수 실행
        + then 메서드는 Promise를 다시 한 번 반환 (반환값 : Promise)
    - 실패의 경우 (Rejected) : Promise.catch(callback) 사용
        + 실패하게 되면, then() 메서드 실행되지 않음
        + catch 메서드는 Promise를 다시 한 번 반환 (반환값 : Promise)
    - Promise Chaining : then, catch를 연달아서 사용 가능한 것이 마치 Chaining하는 것 같다는 의미
*/

promise2.then((value) => {
  console.log(value); // 20
});

promise2.catch((error) => {
  console.log(error);
});

promise2
  .then((value) => {
    console.log(value); // 20
  })
  .catch((error) => {
    console.log(error);
  });

/* 
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : 20
*/
setTimeout(() => {
  console.log(promise2);
}, 3000);

/*
  4. 함수를 생성하여 함수 안에서 프로미스 객체를 새로 생성하여 동적으로 매개변수를 받아 숫자값을 바꿔가면서 사용하도록 개선 활용
*/
function add10(num) {
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise4;
}

const promise_result = add10(0); // promise

// Callback 지옥
promise_result.then((result) => {
  console.log(result); // 10

  // Promise 객체를 이용해 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달 가능
  const new_promise_result = add10(result); // 새로운 promise 객체 반환
  new_promise_result.then((result) => {
    console.log(result); // 20
  });
});

// 해결
add10(0) // promise
  .then((result) => {
    console.log(result); // 10
    return add10(result); // 새로운 promise 객체 반환
  })
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
    return add10(undefined);
  })
  .catch((error) => {
    console.log(error); // 비동기 작업이 실패 상황에 대해 중간에 오류가 발생하더라도 마지막 catch 메서드가 실행되어 num은 숫자가 아닙니다 출력
  });
