/*
  1. 단락 평가 
    - true, false
    - 💡 Truthy, Falsy한 값은 그 값을 출력 
        + Truthy한 값 1 || Truthy한 값 2 => Truthy한 값 1 반환
        + Truthy한 값 1 && Truthy한 값 2 => Truthy한 값 2 반환
*/
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 단락 평가 작동
// returnFalse()의 반환 값이 false 이므로, && 연산자에 의해 무조건 false이므로 false
console.log(returnFalse() && returnTrue()); // False 함수, false

// 단락 평가 미작동
// returnTrue()의 반환 값이 true 이므로, && 연산자에 의해 뒤의 값도 알아야 하므로 둘 다 호출
console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false

// 단락 평가 작동
// returnTrue()의 반환 값이 true 이므로, || 연산자에 의해 무조건 true이므로 true
console.log(returnTrue() || returnFalse()); // True 함수, true

// Truthy, Falsy
function returnFalsy() {
  console.log("Falsy한 함수");
  return undefined;
}

function returnTruthy() {
  console.log("Truthy한 함수");
  return 10;
}

// 단락 평가 작동
// returnFalsy()의 반환 값이 false 이므로, && 연산자에 의해 무조건 false이므로 falsy한 값 출력
console.log(returnFalsy() && returnTruthy()); // Falsy한 함수, undefined

// 단락 평가 미작동
// returnTruthy()의 반환 값이 true 이므로, && 연산자에 의해 뒤의 값도 알아야 하므로 둘 다 호출
console.log(returnTruthy() && returnFalsy()); // Truthy한 함수, Falsy한 함수, undefined

// 단락 평가 작동
// returnTruthy()의 반환 값이 true 이므로, || 연산자에 의해 무조건 true이므로 true
console.log(returnTruthy() || returnFalsy()); // Truthy한 함수, 10

/*
  2. 단락 평가 활용 사례
*/

function printName(person) {
  console.log(person && person.name); // person 값이 없으면, Falsy한 값이므로 아무런 값이 없으므로 undefined
}

printName();

function printName_uses(person) {
  const name = person && person.name; // person 값이 없으면, Falsy한 값이므로 아무런 값이 없으므로 undefined이 name에 저장
  console.log(name || "person의 값이 없음"); // person이 없으면, falsy || "person의 값이 없음"(truthy) 이므로 truthy한 값 출력
  // name이 truthy한 값이 있으면, 단락 평가에 의해 name 출력
}

printName_uses(); // person의 값이 없음
printName_uses({ name: "한수영" }); // 한수영
