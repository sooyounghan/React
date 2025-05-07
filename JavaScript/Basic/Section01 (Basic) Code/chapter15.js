/*
  1. 객체 생성
    - new 키워드 사용 (객체 생성자)
    - {} 사용 (객체 리터럴)
*/

let obj = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

/*
  2. 객체 프로퍼티 (객체 속성)
    - ,을 기준으로 Key:Value (Key는 문자열과 숫자만 가능, Value에는 데이터 타입 제한 없음)
    - 객체 프로퍼티는 키를 기준으로 이름 지정
    - 예외적으로 띄어쓰기가 포함된 문자열의 경우는 " "로 감싸야함
*/
let person = {
  // 객체 프로퍼티 (객체 속성)
  // name, age, hobby : Key
  // "한수영", 32, "수영" : Value
  name: "한수영",
  age: 32,
  hobby: "수영",
  extra: {},
  10: 20,
  "like cat": true,
};

/*
  3. 객체 프로퍼티를 다루는 방법
    - 특정 프로퍼티 접근
        + 점 표기법 : 객체명.프로퍼티 (정적)
        + 괄호 표기법 : 객체명[""] - 반드시 "" 필요 (없으면, 변수로 인식해 오류 발생) (동적으로 프로퍼티 추출 시 사용)
    - 존재하지 않는 프로퍼티에 접근하면 undefined
*/
let name = person.name; // 점 표기법
console.log(name); // 한수영

let name2 = person.name2; // undefined
console.log(name2); // undefined

let age = person["age"];
console.log(age); // 32

// let age2 = person[age]; // Error

let age2 = person["age2"]; // undefined
console.log(age2); // undefined

let property = "hobby"; // 프로퍼티 문자열을 변수로 저장 후 사용
let hobby = person[property]; // 수영
console.log(hobby);

/*
  3. 객체 프로퍼티를 다루는 방법
    - 새로운 프로퍼티 추가
        + 객체명.프로퍼티 = 값;
        + 객체명["프로퍼티"] = 값;
    
*/
person.job = "Not";
person["favoriteFood"] = "고기";

console.log(person); // job, favoriteFood 추가

/*
  3. 객체 프로퍼티를 다루는 방법
    - 객체 프로퍼티 수정
        + 객체명.프로퍼티 = 값;
        + 객체명["프로퍼티"] = 값;
*/
person.job = "educator";
person["favoriteFood"] = "사탕";

console.log(person); // job, favoriteFood 변경

/*
  3. 객체 프로퍼티를 다루는 방법
      - 객체 프로퍼티 삭제
        + delete 객체명.프로퍼티
        + delete 객체명["프로퍼티"];
*/
delete person.job;
delete person["favoriteFood"];

console.log(person); // job, favoriteFood 삭제

/*
  4. 프로퍼티 존재 유무 확인 방법 (in 연산자)
    - "프로퍼티명" in 객체명
    - 존재하면 true, 존재하지 않으면 false
*/
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1); // true
console.log(result2); // false
