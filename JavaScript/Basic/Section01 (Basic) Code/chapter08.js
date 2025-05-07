/*
  1. Null 병합 연산자 : ??
    - 존재하는 값을 추려내는 기능 
    - 피연산자 중 null, undefined가 아닌 값을 추려내는 연산자
*/

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefied ?? 10 = 10
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3; // 10 ?? 20 = 10 (맨 처음 값 출력)
console.log(var6); // 10

let username = "한수영";
let userNickName = "Swim";

let displayName = username ?? userNickName; // 이름이 있으면 username, 없으면 userNickName
console.log(displayName); // 한수영

/*
  2. typeof 연산자 : typeof 피연산자
    - 값의 타입을 문자열로 반환하는 기능을 가진 연산자
*/
let var7 = 1;
var7 = "hello"; // 변수에 다른 타입 가능, 변수 타입 고정 X

let type1 = typeof var7;
console.log(type1); // String

/*
  3. 삼항 연산자 : (조건식) ? (참일 때 반환값) : (거짓일 때 반환값)
    - 항을 3개 사용하는 연산자
    - 조건식을 이용해 참, 거짓일 때 값을 다르게 반환
*/

// 요구사항 : 변수 res에 var 값이 짝수라면 "짝", 홀수라면 "홀"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res); // 짝수
