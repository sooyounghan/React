import { useState } from "react"; // React가 제공하는 useState 내장 함수 import

// 카운터 컴포넌트
const Counter = () => {
  const [count, setState] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setState(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
