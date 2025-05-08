// 3초 간 기다렸다가, 안녕하세요를 출력하는 비동기 함수 task
function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 3000);
}

task();

// 3초 간 기다렸다가 인수로 a, b를 전달 하여 더하는 비동기 함수 add
function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

add(1, 2);

// 비동기 작업을 하는 함수 결과 값을 함수 외부에서 사용하고 싶다면, 콜백 함수 이용하여 비동기 함수 안에서 콜백 함수를 호출하도록 설정
function add_return(a, b, callback) {
  // Callback 함수를 매개변수로 받음
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add_return(1, 2, (value) => {
  console.log(value); // 콜백함수를 매개변수로로 전달
});

// 가정 : 음식 주문 상황 -> 3초 뒤 떡볶이 출력
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

// 음식을 식히는 기능
function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 2000);
}

// 음식 냉동 기능
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// Indent(들여쓰기)가 매우 심해짐 : 기능이 늘어날수록 가독성이 떨어짐 -> Callback 지옥 상황
orderFood((food) => {
  // 콜백 함수
  console.log(food);
  // 💡비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달 가능
  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);

    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
}); // 3초 뒤 떡볶이 출력, 그 이후 2초 뒤 식은 떡볶이 출력, 그 이후 1.5초 뒤 냉동된 떡볶이 출력
