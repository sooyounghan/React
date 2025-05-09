/*
    1. CommonJS 모듈 시스템 사용용

// 내장 함수인 require를 이용
// 현재 경로의 math 모듈로부터 객체 형태로 내보내진 값을 그대로 반환
const moduleData = require("./math");
console.log(moduleData);

// 객체 구조 할당 이용
const { add, sub } = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));
*/

/*
    2. ES 모듈 시스템 사용

import { add, sub } from "./math.js"; // import { 가져올 객체 리터럴 } from "경로(확장자까지 기입 필요)"
console.log(add(1, 2));
console.log(sub(1, 2));
*/

/*
    3. ES 모듈 시스템 사용 - 자주 사용하는 기능

import mul from "./math.js";
console.log(mul(2, 3));

// import 문 합치기 가능
// import mul, { add, sub } from "./math.js"
*/

/*
   라이브러리 사용
    - 라이브러리에서 어떠한 값을 가져올 때, 경로를 명시하는 것이 아닌 from 뒤에 라이브러리 이름만 명시
*/
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
