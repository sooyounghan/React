/*
  1. 함수 표현
    - 함수 자체를 변수에 저장 가능 (함수릏 하나의 값을 가짐)
    - 함수 선언과 동시에 변수에 저장 가능
    - 익명 함수 (함수 표현식) : 함수 선언을 하지 않고, 값으로써 함수로 생성하는 것 (함수 호출 불가) 
    - 💡 함수 표현식으로 만든 함수는 호이스팅 대상이 아님
*/

function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 저장
console.log(varA); // JavaScript에서는 함수를 하나의 값으로 가짐

/*
    ƒ funcA() {
    console.log("funcA");
    }
*/

// 익명 함수 : 값으로써 함수가 생성된 것 (함수 선언이 아님, 따라서 함수 호출 불가)
// console.log(varB); // 함수 표현식으로 생성한 함수는 호이스팅 대상이 아님

let varB = function funcB() {
  consol.log("funcB");
};

// varB(); // 함수 호출 불가
console.log(varB);

/*
  2. 화살표 함수
    - 함수를 이전보다 빠르고 간결하게 생성하기 위한 문법
    - (매개변수값) => { 실행문 / return문 등등 }
    - 값을 반환하기만 한다면, () => 반환값
*/
let varC = () => {
  // (매개변수값) => { 실행문 또는 return 문 등 }
  return 1;
};

console.log(varC()); // 1

let varC_2 = () => 1; // () => 반환값
console.log(varC_2()); // 1

let varC_3 = (value) => value + 1; // (매개변수값) => 반환값
console.log(varC_3(1)); // 2

let varC_4 = (value) => {
  // 실행문이 2개 이상
  console.log(value);
  return value + 1;
};
console.log(varC_4(10)); // 10, 11
