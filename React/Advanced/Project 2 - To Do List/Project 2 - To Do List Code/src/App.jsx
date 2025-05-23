import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

// 임시 데이터 생성 : 컴포넌트 내부에 생성하면, 매번 const 상수를 지속해서 불러오므로, 외부에서 생성
// 총 3개의 MockData를 배열에 담아 생성
const mockData = [
  {
    id: 0, // 고유 ID
    isDone: false, // 체크박스 유무
    content: "React 공부하기", // Todo 내용
    date: new Date().getTime(), // 입력된 시간 (현재 시간)
  },

  {
    id: 1, // 고유 ID
    isDone: false, // 체크박스 유무
    content: "빨래하기", // Todo 내용
    date: new Date().getTime(), // 입력된 시간 (현재 시간)
  },

  {
    id: 2, // 고유 ID
    isDone: false, // 체크박스 유무
    content: "노래 연습하기", // Todo 내용
    date: new Date().getTime(), // 입력된 시간 (현재 시간)
  },
];

function App() {
  const [todos, setTodos] = useState(mockData); // mockData로 초기화
  const idRef = useRef(3); // id 구별을 위한 Reference 객체 생성

  // setTodos 함수를 호출하여 값을 직접 변경해야 하기 위해 onCreate 함수 생성
  const onCreate = (content) => {
    const newTodo = {
      // 새로 추가되는 newTodo 객체 생성
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // setTodos 호출 (todos.push(newTodo)) : state가 상태 변화를 일으켜 이를 감지하여 setTodos가 상태 변화를 일으켜야하므로 안 됨
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State 값 중에 targetId와 일치하는 Id를 갖는 To Do 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열 생성
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // 해당 ID를 갖는 TodoItem 삭제

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
