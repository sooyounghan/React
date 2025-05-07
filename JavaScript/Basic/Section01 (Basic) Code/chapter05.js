/*
  1. Number Type : 존재할 수 있는 모든 숫자값 포함
    - 사칙 연산 지원
*/
let num1 = 27; // 양수 가능
let num2 = 1.5; // 소수 가능
let num3 = -20; // 음수 가능

// 사칙 연산 가능
console.log(num1 + num2); // 덧셈
console.log(num1 - num2); // 뺄셈
console.log(num1 * num2); // 곱셈
console.log(num1 / num2); // 나눗셈
console.log(num1 % num2); // 나머지 연산 (Moduler 연산)

// 양의 무한대 : infinity
let inf = Infinity;

// 음의 무한대 : -infinity
let mInf = -Infinity;

// NaN (Not a Number) : 수치 연산 실패했을 때 결과값으로 사용
// JS는 불가능한 수치 연산을 하더라도 프로그램이 종료되지 않음 (수학 연산에서는 안전함)
console.log(1 * "Hello"); // 숫자 * 문자열 = 연산 불가하므로 실패

/*
  2. String Type : 존재할 수 있는 모든 문자(열) 포함
    - " ", ' ' 로 감싸줘야함 (그렇지 않으면, 변수명으로 취급)
    - + 연산자를 통해 문자열 연결 가능
    - ` `(백틱) 이용 가능 (기본적으로 ""와 같은 기능이지만, `${}`를 통해 변수 동적 할당 가능) - Template Literal (템플릿 리터럴 문법)
*/

let myName = "수영";
// let myName = 수영; // chapter05.js:30 Uncaught ReferenceError: 수영 is not defined

let myLocation = "오산";

let introduce = myName + myLocation;

console.log(introduce);

// 템플릿 리터럴 문법법
let intorduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(intorduceText);

/*
  3. Boolean : 참 / 거짓만을 저장
    - 현재 상태 의미하는 변수에 사용
*/
let isSwitchOn = true;
let isEmpty = false;

/*
  4. Null : 아무것도 없다라는 의미 표현
    - 변수에 아무런 값도 담기지 않음을 의미
*/
let empty = null;

/*
  5. Undefined : undefined라는 단 하나의 값을 의미
    - 💡 변수를 선언하고 어떠한 값도 초기화하지 않았을 때 자동 할당 (초기화하지 못했거나 존재하지 않는 값을 불러오려고 할 때 발생하는 값)
    - 💡 cf) Null : 직접 명시적으로 값을 할당해줘야 함 (즉, 직접 이 변수에 어떠한 값도 없음을 설정)
*/
let none;
console.log(none);
