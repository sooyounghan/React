/*
  1. if 조건문 (if문) : 복잡한 여러 조건으로 실행
    - if 조건 만족 : 실행문 실행
    - if ~ else : if문이 만족되지 못할 때, else문 실행
    - if ~ else if ~ else : 여러 조건 추가 가능 (else if은 갯수 제한 없음)
*/
let num = 10;

if (num >= 10) {
  // 조건에 만족하면, 실행문 실행
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  // 조건에 만족하지 않으면, 실행문 실행
  console.log("num은 10 이하입니다.");
  console.log("조건이 거짓입니다.");
}

/*
  2. Switch 조건문 (switch 문) : 변수의 값을 기준으로 실행
    - if문과 기능 자체는 동일
    - 다수 조건을 처리할 때 if문보다 직관적
    - switch (비교할 조건식) {
        case 조건 : 
            실행문;
        ...
        default :
            실행문;  
      }
    - 일치하는 값을 위에서 아래로 확인하고, 일치하는 부분 아래까지 실행
    - 이를 방지하기 위해 break 문 추가
*/

let animal = "cat";
// let animal = "owl"; // 어떠한 값에도 해당하지 않는 값

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }

  case "bear": {
    console.log("곰");
    break;
  }

  case "snake": {
    console.log("뱀");
    break;
  }

  case "tiger": {
    console.log("호랑이");
    break;
  }

  default: {
    // case에 해당하지 않는 값
    console.log("그런 동물은 없습니다.");
  }
}
