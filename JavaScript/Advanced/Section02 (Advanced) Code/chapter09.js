/*
  5가지 배열 변형 메서드
*/

/*
  1. filter
    - 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
*/
let arr1 = [
  { name: "한수영", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "아무개", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople); // [{name : "한수영", hobby : "테니스"}, {name : "홍길동", hobby : "테니스"}]

/*
  2. map
    - 배열의 모든 요소를 순회하며, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
*/
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item); // 0 1, 1 2, 2 3
  return item * 2;
});

console.log(mapResult1); // [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // [한수영, 홍길동, 아무개]

/*
  3. sort
    - 배열을 사전 순으로 정렬
    - 💡 숫자값으로 이루어져있으면, sort 메서드 정상적 동작 X
    - 숫자 대소 비교 : 비교 기준 설정하는 콜백함수 설정
*/
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ["a", "b", "c"]

let arr4 = [10, 3, 5];
arr4.sort();

console.log(arr4); // [10, 3, 5]

// 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞 위치
    return 1; // 양수 : 둘 중 작은 값이 앞에 위치
  } else if (a < b) {
    // a가 b 앞 위치
    return -1; // 음수 : 둘 중 큰 값이 앞에 위치
  } else {
    // a = b이면,
    return 0; // 0 : 변경하지 않음
  }
});

console.log(arr4); // [3, 5, 10]

console.log(arr4); // [10, 3, 5]

// 내림차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞 위치
    return -1; // 음수 : 둘 중 큰 값이 앞에 위치
  } else if (a < b) {
    // a가 b 앞 위치
    return 1; // 양수 : 둘 중 작은 값이 앞에 위치
  } else {
    // a = b이면,
    return 0; // 0 : 변경하지 않음
  }
});

console.log(arr4); // [10, 5, 3]

/*
  4. toSorted
    - sort : 원본 배열 자체 정렬
    - toSorted : 원본 배열은 냅두고, 새로운 배열로 반환
*/

let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

console.log(arr5); // ['c', 'b', 'a']
console.log(sorted); // ['a', 'b', 'c']

/*
  5. join
    - 배열의 모든 요소를 하나의 문자열로 합침
    - 구분자 변경 : join(Regex);
*/
let arr6 = ["Hi", "I'm", " Sooyoung"];
const joined = arr6.join();
const joined2 = arr6.join("-");

console.log(joined); // Hi, I'm Sooyoung
console.log(joined2); // Hi,-I'm- Sooyoung
