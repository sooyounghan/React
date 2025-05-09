// Math 모듈

/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
*/

/*
    1. CommonJS 모듈 시스템 사용용
// module라는 내장 객체의 exports 프로퍼티 값으로 객체를 저장
module.exports = {
  // add라는 프로퍼티의 값 : 내보낼 add 함수
  // sub라는 프로퍼티의 값 : 내보낼 sub 함수
  // Key와 Value 값이 같을 경우, 변수나 함수의 이름만 작성하면 함수가 자동 설정

  // add : add,
  // sub : sub
  add,
  sub,
};
*/

/*
    2. ES 모듈 시스템 사용
*/
// export { add, sub };

/*
    3. ES 모듈 시스템 사용 - 자주 사용하는 기능
*/
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
