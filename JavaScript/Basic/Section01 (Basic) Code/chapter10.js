/*
  1. for문
    - for(초기식; 조건식; 증감식) {
         실행문;
      }
    - 초기식에는 변수 할당 (= count 변수)
    - 조건식 : 참이면 반복, 거짓이면 반복문 탈출
    - 증감식 : 한 번 반복이 종료될 때마다, count 변수의 증감시키는 용도로 사용
*/

for (let idx = 1; idx <= 5; idx++) {
  // idx, 즉 count 변수는 1으로 초기 할당, 5번 반복 (1씩 증가)
  console.log(idx); // 1, 2, 3, 4, 5
}

// 반복문이 중간에 조건이 만족하지 않더라도, 탈출 (for문 내 if문)
for (let idx = 1; idx <= 10; idx++) {
  // idx, 즉 count 변수는 1으로 초기 할당, 10번 반복 (1씩 증가)
  console.log(idx); // 1, 2, 3, 4, 5

  if (idx >= 5) {
    // idx가 5이상이면 탈출
    break;
  }
}

// 반복문의 특정 조건 건너뛰기 (for문 - continue)
for (let idx = 0; idx <= 10; idx++) {
  // idx, 즉 count 변수는 1으로 초기 할당, 10번 반복 (1씩 증가)

  if (idx % 2 == 0) {
    continue; // idx가 짝수라면, 해당 반복을 실행하지 않음
  }
  console.log(idx); // 1, 3, 5

  if (idx >= 5) {
    // idx가 5이상이면 탈출
    break;
  }
}
