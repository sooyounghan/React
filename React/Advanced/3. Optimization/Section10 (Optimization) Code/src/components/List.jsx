import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  /*
    1. useMemo - 현재 todo들의 상태를 분석해 수치로 제공하는 함수 생성
      - doneCount는 todos.filter를 사용하므로 개수가 증가할수록 성능이 나빠짐
      - filter 메서드는 배열 내 전체 요소들을 한 번씩 다 순회하기 때문임
      - 또한, 해당 함수는 컴포넌트 내에서 바로 호출되고 있기 때문에, 리스트 컴포넌트가 리렌더링될 때마다 게속 새롭게 호출
      - 새로운 Todo 추가, 수정, 삭제될 때만 호출하도록 설정

    2. useMemo를 사용하면, 연산 자체 Memoization 가능
      - 또한, 특정 조건을 만족했을 때에만 다시 계산 가능하도록 설정 가능
  */
  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  /*
    3. useMemo
     - useMemo(Callback, Deps) : Deps에 포함된 값이 변경될 경우에만 첫 번째 인수의 콜백 함수를 다시 실행
     - 추가로 해당 콜백 함수가 반환하는 값을 useMemo는 그대로 반환
     - deps로 아무것도 전달하지 않으면, 첫 번째 콜백 함수의 연산 수행과 반환이 컴포넌트가 최초 렌더링 되었을 때 딱 한 번만 수행
        + 현재 콜백함수 내부에서 todos라는 리액트 State를 이용하는데, deps에는 넣지 않았으므로, todos의 state가 변경되더라도 이 연산은 다시 실행되지 않아서 경고 발생
     - 즉, 원하는 어떠한 연산을 특정 조건, deps를 이용해 특정 조건이 만족하지 않았을 때에는 다시 수행하지 않도록 가능하며, 그런 연산의 결과 값을 return 값으로 받기 가능 
  */
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4> To Do List 🌱 </h4>
      <div>
        <div> total : {totalCount} </div>
        <div> doneCount : {doneCount} </div>
        <div> notDoneCount : {notDoneCount} </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
