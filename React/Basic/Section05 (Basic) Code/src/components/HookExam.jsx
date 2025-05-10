import useInput from "../hooks/useInput";

/*
  Hook 관련 정보
    1. 함수 컴포넌트 또는 Custom Hook에서만 호출 가능
    2. 조건부(조건문 또는 반복문 내부)로 호출될 수 없음 
        - 리액트가 내부적으로 컴포넌트를 호출해 화면에 렌더링할 때 조건문이나 반복문 내부에서 Hook을 호출하게 되면, 서로 다른 Hook들이 호출 순서가 엉망이 되어버리는 현상 발생하여 내부적 오류 발생 가능
        - 따라서, 컴포넌트 함수 안에서만 호출 가능
    3. Custom Hook 생성 가능
        - Custom Hook은 일반적으로 /src/hooks라는 폴더를 생성해 저장하는 것이 일반적
*/

// const state = useState(); // 오류 발생 (Invalid hook call. Hooks can only be called inside of the body of a function component.)
const HookExam = () => {
  /*
  if (true) {
    const state = useState();
  }

  for (;;) {
    const state = useState();
  }
*/

  const [input, onChange] = useInput();
  // 위의 커스텀 훅을 이용해 여러 번 반복해서 사용 가능
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
