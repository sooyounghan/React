/*
  1. Falsy한 값 : 조건문에서는 거짓으로 평가
    - undefined
    - null
    - 0, -0
    - NaN
    - "" 
    - 0n : BigInteger (특수 자료형) - 아주 큰 숫자 저장에 사용
*/

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

/*
  2. Truthy한 값 : 배열, 객체, 화살표 함수 등등
    - 7가지 Falsy한 값을 제외한 모든 값
*/
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Turthy");
}

/*
  3. 활용 사례
*/

function printName(person) {
  // Fasly한 값이 오면,
  if (!person) {
    console.log("person 값이 없음");
    return;
  }

  console.log(person.name);
}

let person = { name: "한수영" };
printName(person); // 한수영

let person_not_name; // undefined
// let person_not_name = null; // null
printName(person_not_name); // 조건 설정하지 않으면, Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// 조건 설정 : person 값이 없음
