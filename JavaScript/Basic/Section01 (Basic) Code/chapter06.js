/*
  1. 묵시적 (암묵적) 형 변환
    - 자바스크립트 엔진이 자동적으로 형 변환
    - 특정 하나의 변수 값만 형 변환했을 때, 오류가 발생하지 않고 연산이 잘 종료될 수 있는 경우에만 변환
*/

let num = 10;
let str = "20";

const result = num + str; // Number(->String) + String = String
console.log(result); // 1020

/*
  2. 명시적 형 변환
    - 프로그래머가 내장 함수 등을 이용해 직접 형 변환
*/

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // String -> Number
console.log(10 + strToNum1); // 20 (Number)

// 문자열 안에 숫자 외 다른 타입이 존재하는 경우는 명시적 형 변환 제한
let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

// parseInt 내장 함수 사용 (단, 문자가 앞에 있으면 형 변환이 잘 이루어지지 않으므로, 숫자가 앞부분에 위치하는 것이 좋음)
let strToNum2_1 = parseInt(str2);
console.log(strToNum2_1); // 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 20 (String) = 20입니다
