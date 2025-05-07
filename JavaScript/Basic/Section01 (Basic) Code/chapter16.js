/*
  1. 상수 객체
    - 상수에 저장해놓은 객체
    - 상수 객체에 다른 객체 생성 불가
    - 단, 객체에 새로운 프로퍼티 추가 및 생성, 삭제는 가능
    - 상수는 새로운 값을 할당하지 못함, 즉, 아예 새로운 값을 할당하는 것은 불가
    - 하지만 저장되었던 객체 값의 프로퍼티 추가, 수정, 삭제는 문제 없음
*/

const animal = {
  type: "고양이",
  name: "나비",
  color: "blakc",
};

/*
animal = { a: 1 }; // Uncaught TypeError: Assignment to constant variable.
*/

animal.age = 2; // 프로퍼티 추가
animal.name = "까망이"; // 프로퍼티 수정
delete animal.color; // 프러퍼티 삭제

console.log(animal);

/*
  2. 메서드 (Method)
    - 객체 프로퍼티 중 값이 함수인 것
    - 객체 동작 정의에 사용
*/

const person = {
  name: "한수영",

  // Method
  sayHi: function () {
    console.log("안녕!");
  },

  sayHi2: () => {
    // 화살표 함수
    console.log("안녕!");
  },

  sayHi3() {
    // 메서드 선언
    console.log("안녕!");
  },
};

person.sayHi(); // 함수 호출 가능 ("안녕!")
person.sayHi2(); // 함수 호출 가능 ("안녕!")
person.sayHi3(); // 함수 호출 가능 ("안녕!")
