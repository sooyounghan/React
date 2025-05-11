import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  // 검색 기능 추가 - 따라서, 검색어가 변경이되면 List 컴포넌트가 리렌더링 되어야 함
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어에 대한 필터 기능
  const getFilteredData = () => {
    if (search === "") {
      // 빈 문자열이면, 원래 To Do 목록 반환
      return todos;
    }

    // 빈 문자가 아니면, To Do 목록에서 해당 Content를 포함하는 To Do 반환
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 컴포넌트가 리렌더링 될 때마다 검색어에 대한 필터 기능을 하는 getFilteredData 호출해 이를 filteredTodos에 저장
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4> To Do List 🌱 </h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {/* map 함수 이용 : return 값에는 HTML 태그 또는 Component 가능 */}
        {filteredTodos.map((todo) => {
          {
            /* 
              1. todo 매개변수에 모든 정보가 props로 전달 (spread 연산자 활용) 
              2. 리스트 안의 각 자식들은 반드시 고유한 Key를 가져야 함
                 - 리액트에서는 내부적으로 리스트 형태로 렌더링된 컴포넌트들이나 어떤 요소를 구분할 때 각 요소를 Key라는 props를 통해 구분
                 - 따라서, 모든 아이템 컴포넌트에 key라는 props를 전달해줘야 함
            */
          }
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
