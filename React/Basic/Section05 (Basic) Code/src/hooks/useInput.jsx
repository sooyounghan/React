import { useState } from "react";

// Custom Hook으로 자주 사용하는 useState, useRef를 또 하나의 Hook으로 사용 가능 - 접두사로 use를 붙여주면 Hook으로 인식
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
