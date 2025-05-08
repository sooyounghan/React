// 자바스크립트 엔진 : 동기적으로 콘솔에 1 출력, 3 출력 작업 진행
console.log(1);
console.log(3);

console.log(1);
// Web APIs에게 setTimeout(() => { console.log(2) }, 3000)을 전달
// setTimeout(Callback Function, ms) : 비동기 함수로, 원하는 콜백 함수 코드를 특정 시간이 지난 이후 비동기로 실행시켜주는 함수
setTimeout(() => {
  console.log(2);
}, 3000); // Web APIs : 3초 동안 기다렸다가, 콜백 함수를 다시 자바 스크립트 엔진에게 전달
console.log(3); // 자바스크립트 엔진 1 3 콘솔 출력, 3초간 지난 후 : 자바스크립트 엔진은 Web APIs에게 받은 2 콘솔 출력
