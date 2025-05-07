/*
 1. 변수
    - 변수 선언 방법은 let 변수명 = 값;
    - 변수 선언과 변수 초기화
        + 변수 선언 : let age
        + 변수 초기화 : 선언한 변수에 값을 저장
        + 변수의 값 변경은 언제든 가능하고, 초기화를 하지 않아도 됨
*/
let age; // 변수 초기화 값이 없으면 undefined (아무 값도 없다는 뜻)
console.log(age);

age = 30;
console.log(age);

// let age = 40; // 한 번 선언한 변수는 중복되서 선언 불가

/*
  2. 상수
    - 변수와 달리, 한 번 저장한 값 변경 불가
    - const 키워드 사용
    - 상수 초기화 이후 값 변경 불가하므로, 반드시 초기값 할당하는 초기화 필요
*/
const birth = "1997";
// birth = "1234"; // 오류 발생 Uncaught TypeError: Assignment to constant variable.

/*
  3. 변수 명명 규칙 (네이밍 규칙) - 변수, 상수 통칭
*/

// 3-1. $, _ 를 제외한 기호 사용 불가

// let #name; // 불가
// let na#me; // 불가
// let name#; // 불가
let $_name; // 가능

// 3-2. 숫자로 시작 불가

let name1; // 가능
// let 2name; // 불가
let na2me; // 가능
let $2name; // 가능

// 3-3. 예약어(키워드) 사용 불가
// let let; // 불가
// let if; // 불가

/*
  4. 변수 명명 가이드
    - 변수 명명은 의미가 있는 것으로 설정
*/
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
