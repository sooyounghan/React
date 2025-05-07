/*
  1. 대입 연산자
    - 변수명 = 값
*/
let var1 = 1;

/*
  2. 산술 연산자
    - 우선순위 : () > *, /, % > +, -
*/
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6); // 21

let num7 = (1 + 2) * 10;
console.log(num7); // 30

/*
  3. 복합 대입 연산자
    - 산술연산자 + 대입연산자 복합
    - +=, -=, *=, /=, %=
*/
let num8 = 10;
num8 += 20;
console.log(num8); // 30

num8 -= 20;
console.log(num8); // 10

num8 *= 20;
console.log(num8); // 200

num8 /= 20;
console.log(num8); // 10

num8 %= 20;
console.log(num8); // 10

/*
  4. 증감 연산자
    - 값을 1씩 증가 / 감소하는 연산자
    - ++, --
    - 변수++, 변수-- : 후위 연산 - 해당 라인이 끝난 이후 증감 연산자 수행
    - ++변수, --변수 : 전위 연산 - 먼저 연산 수행 후 해당 라인 수행
*/
let num9 = 10;
console.log(num9++); // 10 -> 출력 -> 11 : 10

console.log(num9--); // 11 -> 출력 -> 10 : 11

console.log(++num9); // 10 -> 11 -> 출력 : 11

console.log(--num9); // 11- > 10 -> 출력 : 10

/*
  5. 논리 연산자
    - true, false 값을 다룰 때 사용 : &&, ||, !
    - && : 모두 참이어야 true, 그렇지 않으면 false
    - || : 하나라도 참이면 true, 모두 거짓이면 false
    - ! : true -> false, false -> true
  */
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not); // true, fasle, false

/*
  6. 비교 연산자
    - 두 개의 값을 비교하는 연산자
    - === : 동등 비교 연산자 (💡 cf) ==도 비교 가능하지만, 값의 자료형까지 같은지 비교가 되지 않음)
    - !== : 비동등 비교 연산자
    - 대소 비교 : >, <, >=, <=
*/
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2); // false, true

let comp3 = 1 == "1";
console.log(comp3); // true

let comp4 = 2 > 1;
let comp5 = 2 < 1;
console.log(comp4, comp5); // true, false

let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
console.log(comp6, comp7); // true, true
