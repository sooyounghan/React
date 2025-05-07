/*
  1. 콜백 함수
    - 자신이 원하는 시점에 함수 호출 가능
    - 함수 호출, 함수 표현식처럼 사용 가능
*/
function main(value) {
  console.log(value); // sub 함수 출력
  value(); // sub 함수 호출
  console.log("end");
}

function sub() {
  // Callback 함수
  console.log("I am sub.");
}

main(sub); // sub 함수 출력

/*
  ƒ sub() {
    // Callback 함수
    console.log("I am sub.");
  }

  I am sub.
  end
*/

main(function sub_inner() {
  console.log("I am sub"); // 함수 선언을 함수 호출에 넣어서 사용 가능
});

/*
  ƒ sub() {
    // Callback 함수
    console.log("I am sub.");
  }

  I am sub.
  end
*/

main(() => console.log("I am sub")); // 함수 선언을 함수 호출에 넣어서 사용 가능

/*
    () => console.log("I am sub")
  
    I am sub.
    end
*/

/*
  2. 콜백 함수 활용 - 중복 코드 제거 및 활용 가능능
*/

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeat_double(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5); // 1, 2, 3, 4, 5
repeat_double(5); // 2, 4, 6, 8, 10

function repeat_callback(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat_callback(5, function (idx) {
  console.log(idx); // 1, 2, 3, 4, 5
});

repeat_callback(5, (idx) => {
  console.log(idx * 2); // 2, 4, 6, 8, 10
});
