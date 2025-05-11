import { useReducer } from "react";

/*
  3. reducer : 변환기 (상태를 실제로 변환시키는 변환기 역할을 하는 함수)
    - reduce 함수에서 새로운 state 값을 반환해주면, useReducer가 불러와서 실제로 state 값을 변경
*/
function reducer(state, action) {
  // state 변수와 action 객체 전달
  console.log(state, action);

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  /* 
    1. useReducer
    - useReducer()를 통해 State 생성하여 첫 번째 요소로 반환, dispatch라는 상태 변화를 요청하기만 하는 함수 반환 (즉, 상태 변화가 있어야 한다는 사실을 알리는 또는 발송하는 함수)
        + dispatch : 발송하다 또는 급송하다 
    - dispatch 함수를 호출하게 되면, 상태 변화가 요청이 되고, useReducer가 상태 변화를 실제로 처리하는 함수를 호출하게 됨 (그 함수를 직접 생성해야 함)
    - dispatch 함수를 호출하면, useReducer 함수가 실제 상태를 변화시키는 reducer 함수 호출
  */
  const [state, dispatch] = useReducer(reducer, 0); // useReducer(reducer, 초기값)

  const onClickPlus = () => {
    /*
      2. dispatch
        - dispatch 호출 : 인수로는 상태가 어떻게 변화되길 원하는지 정보 전달
        - dispatch 함수에는 객체 형태로 type이라는 프로퍼티에 상태를 어떻게 변화시키길 원하는지 작성 : Action 객체라고 하며, 이를 인수로 전달
          + data라는 프로퍼티로 1만큼 증가시켜달라고 전달
    */
    dispatch({
      type: "INCREASE", // 값 증가 요청
      data: 1, // 데이터는 1만큼 증가
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1> {state} </h1>
      <button onClick={onClickPlus}> + </button>
      <button onClick={onClickMinus}> - </button>
    </div>
  );
};

export default Exam;
