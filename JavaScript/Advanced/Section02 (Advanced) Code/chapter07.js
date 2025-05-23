/*
  배열 메서드 - 요소 조작 (6가지)
*/

/*
  1. Push
    - 배열의 맨 뒤에 새로운 요소 추가
    - 반환값 : 추가된 배열의 길이
*/
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4];

const newLength = arr1.push(5, 6, 7);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 7

/*
  2. Pop 
    - 배열의 맨 뒤 요소 제거 후 반환
*/
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

console.log(popedItem); // 3
console.log(arr2); // [1, 2];

/*
  3. Shift
    - 배열에서 맨 앞 요소 하나를 제거 후 반환
    - Pop보다 느린 성능 (맨 앞 제거)
*/
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1
console.log(arr3); // [2, 3];

/*
  4. Unshift
    - 배열의 맨 앞에 요소를 하나 추가
    - 반환값 : 추가된 배열의 길이
    - Push보다 느린 성능 (맨 앞 추가)
*/
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(4);

console.log(newLength2, arr4); // 4, [4, 1, 2, 3]

/*
  5. Slice
    - 가위처럼 배열 특정 범위를 잘라 새로운 배열로 반환
    - slice(시작 인덱스, 마지막 인덱스 + 1) : 시작 인덱스 ~ 마지막 인덱스까지 자름
      + 마지막 인덱스 + 1부분을 생략하면 맨 마지막까지 자름
    - 원본 배열의 값은 변경되지 않음
    - 맨 마지막부터 시작하고 싶다면 -1부터 지정 (맨 마지막 인덱스 : -1)
*/
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 4);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1); // 맨 마지막 인덱스
let sliced4 = arr5.slice(-3); // 맨 뒤에서 3번째 인덱스부터 맨 마지막 인덱스스

console.log(sliced); // [3, 4, 5]
console.log(sliced2); // [3, 4, 5]
console.log(sliced3); // [5]
console.log(sliced4); // [3, 4, 5]

console.log(arr5); // [1, 2, 3, 4, 5]

/*
  6. Concat
    - 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
*/
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
