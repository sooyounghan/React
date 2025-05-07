/*
  1. 배열 생성
    - new Array() 사용 (배열 생성자)
    - [] 사용 (배열 리터럴) - 대부분 사용
    - 어떠한 데이터 자료형 넣기 가능 (원시 타입, null, undefined, 화살표 함수, 함수, 배열 모두 가능)
*/

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3];
console.log(arrC); // [1, 2, 3]

let arrD = [1, 2, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrD);
/*
[1, 2, true, 'hello', null, undefined, ƒ, {…}, Array(0)]
*/

/*
  2. 배열 요소 접근
    - 각 원소 번호(인덱스)로 접근 가능
    - 인덱스의 시작은 0부터 시작
    - 특정 원소의 값 수정 가능
*/
let item1 = arrC[0]; // 0번 인덱스 접근 (1)
let item2 = arrC[1]; // 1번 인덱스 접근 (2)
console.log(item1, item2); // 1, 2

arrC[0] = "hello"; // 0번 인덱스의 값을 1에서 hello로 수정
console.log(arrC);
