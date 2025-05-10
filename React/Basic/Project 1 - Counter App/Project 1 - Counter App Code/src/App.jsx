import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Viewer는 count State만 props로 전달하면 가능
  /*
    Controller는 count와 이를 처리할 setCount 함수 모두 필요 (해당 버튼을 누르면, State인 count에 대해 setCount해야 하기 때문임)
      - 하지만, 모두 넘겨주는 것보다 이를 처리할 Event Handler를 만들어서 이를 props로 전달하는 것이 편리
  */
  const onClickButton = (value) => {
    // value는 버튼의 값
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1> Simple Counter </h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
