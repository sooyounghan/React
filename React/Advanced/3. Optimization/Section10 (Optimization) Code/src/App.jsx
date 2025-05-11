import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer, useCallback } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  /*
    1. useCallback(최적화하고 싶은 함수, deps)
      - 즉, 불필요하게 재생성하지 않도록 방지하고 싶은 함수를 첫 번째 인수로 전달
      - deps를 두 번째 인수 전달
     
    2. 기본적으로 첫 번째 인수로 전달한 callback 함수를 그대로 생성해 반환
    3. deps가 변경되었을 때만 다시 생성 (=Memoization)
      - deps가 빈 배열이라면, 컴포넌트가 최초 한 번 렌더링 될 때, Mount될 때에만 함수를 한 번 생성하고 그 뒤에는 새롭게 생성하지 않음
  */
  // const func = useCallback(() => {}, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
