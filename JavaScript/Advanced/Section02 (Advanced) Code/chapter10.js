/*
  1. Date 객체 생성
    - new Date() : 내장함수 - 객체 생성자
        + 인수가 없으면 현재 날짜 정보 저장
        + 인수에 특정 날짜 부여하면 해당 날짜 정보 저장 (시간 정보도 가능)
*/
let date1 = new Date(); // 생성자
console.log(date1); // 현재 시간

let date2 = new Date("1997-01-07 23:59:59"); // 1997. 07. 01, 1997/01/01 가능
console.log(date2);

let date3 = new Date(1997, 1, 7, 23, 59, 59); // 문자열로 설정하지 않아도 가능
console.log(date3);

/*
  2. Time Stamp
    - 특정 시간이 1970. 01. 01 00시 00분 00초 (= UTC, 협정 세계시, 세계 모든 나라가 표준으로 시작되는 시간) 기준으로 몇 ms가 지났는지 의미하는 숫자값
    - Date.getTime() : Date 객체 안 저장된 시간에 해당하는 타임 스탬프 계산
    - 새로운 Date 객체 생성에 이용
*/
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4); // 동일

/*
  3. Date 객체로부터 시간 요소 추출
*/
let year = date1.getFullYear(); // 연도 추출
let month = date1.getMonth(); // 월 추출
let date = date1.getDate(); // 일 추출

let hour = date1.getHours(); // 시간 추출
let minute = date1.getMinutes(); // 분 추출
let seconds = date1.getSeconds(); // 초 추출

console.log(year, month + 1, date, hour, minute, seconds); // month = 현재 날짜보다 - 1 (💡 JavaScript의 월은 0부터 시작하므로 +1)

/*
  4. Date 객체 시간 수정 
*/
date1.setFullYear(2023); // 연도 변경
date1.setMonth(2); // 월 변경 (2 -> 3)
date1.setDate(30); // 일 변경

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1); // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)

/*
  5. Date 객체에 저장된 시간을 여러 포맷으로 출력 
*/

// 현재 날짜만 출력 : Date.toDateString()
console.log(date1.toDateString()); // Thu Mar 30 2023

// 현지화 된 시간 : Date.toLocaleString()
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59
