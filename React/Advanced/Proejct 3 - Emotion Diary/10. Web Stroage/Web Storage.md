-----
### 웹 스토리지 이용하기
-----
1. 프로젝트에 추가할 내용 (최적화는 할 필요가 없으므로 제외)
<div align="center">
<img src="https://github.com/user-attachments/assets/b7bf0a6b-747e-4736-a1ad-cb769bcdaafe">
</div>

  - 최적화는 비용이 많이 드는 계산 및 매우 여러번, 반복복적으로 실행되는 연산에 주로 최적화 진행하는 것이 좋음 (API 호출해서, 데이터를 가공하는 등의 작업들)
    + React의 최적화 기능 (최적화는 너무 과하면 컴포넌트나 함수의 확장성이 줄어들거나 프로젝트 유지보수를 어렵게 만듬)
<div align="center">
<img src="https://github.com/user-attachments/assets/9d05325e-318d-4df3-a167-1acc6e3adf33">
</div>

2. 웹 스토리지 (Web Storage)
   - 현재 프로젝트는 새로고침하면 일기 데이터들이 다 초기화 : 데이터들은 결국 App 컴포넌트의 data State에 보관되기 때문임
   - React State는 내부적으로 자바스크립트의 변수에 저장된 값이므로 초기화
<div align="center">
<img src="https://github.com/user-attachments/assets/5bb75231-bdd8-4b2e-bc4f-492f556b904e">
<img src="https://github.com/user-attachments/assets/00def16e-c4e3-4dce-a022-25f24602aa44">
<img src="https://github.com/user-attachments/assets/d7d5139c-b966-48a7-a6b0-62cf5dd26d36">
</div>

   - State에 저장된 데이터를 별도 외부 데이터베이스에 추가로 보관하도록 설정하고, 데이터베이스로부터 이전에 저장해뒀던 State 값을 불러와 리액트 앱에서 사용해야 함
<div align="center">
<img src="https://github.com/user-attachments/assets/e533f9d2-2b83-43de-a50d-0c12a076a365">
<img src="https://github.com/user-attachments/assets/45e350bc-afa3-4202-9078-119436bd905d">
<img src="https://github.com/user-attachments/assets/f23e0d0e-123d-4c85-afe7-91fb283eefc9">
<img src="https://github.com/user-attachments/assets/e0038e57-67b9-4221-81fe-3a8e5a783f07">
</div>

  - 웹 스토리지 (Web Storage) : 웹 브라우저 안에 내장되어 있는 웹 스토리지라는 심플한 데이터베이스
<div align="center">
<img src="https://github.com/user-attachments/assets/29a043b3-98a1-4305-98c7-e2ca9591004c">
<img src="https://github.com/user-attachments/assets/a81c1333-1756-4173-a7ba-fece51ad8e8e">
</div>


  - Web Storage는 Session Storage와 Local Storage로 구분
    + 기본적으로 모두 값을 저장하고 꺼내오는 방식, 기본적으로 동작하는 방식은 동일
    + 차이점 : 데이터를 어디에 보관할 것이고, 데이터가 언제 초기화되는지에 따라 다름
      * Session Storage : 브라우저 탭별로 데이터를 데이터를 보관하며, 탭이 종료되기 전까지 데이터 유지 (새로고침이 발생하더라도 문제 없음), 탭이 종료되거나 꺼지면 데이터 삭제
      * Local Storage : 사이트 주소별로 데이터를 보관하며, 사용자가 직접 삭제하기 전까지 데이터 보관 (이번 프로젝트에서 이용)
     
<div align="center">
<img src="https://github.com/user-attachments/assets/ffbfbbe1-66cf-4b93-9287-160bc1ddfeed">
<img src="https://github.com/user-attachments/assets/88fe5667-a08f-4dd6-ac08-fa4b521e9335">
</div>

3. 실습
  - 웹 스토리지 기본 기능
```jsx
/*
  Web Storage
    - setItem(Key, Value) : Key 값은 무조건 원시 타입만 가능
    - value를 객체로 저장하면 [object Object] : 웹 스토리지는 모든 데이터를 기본적으로 다 문자열로 보관함
      + 이 객체를 문자열로 변환해야 함 (JSON.stringify() 사용)
    - getItem(Key) : 해당 Key에 해당하는 value 값 가져옴
      + 객체가 아닌 문자열로 저장하므로로, 문자열을 다시 객체로 변환 필요 : JSON.parse() 사용
      + JSON.parse()는 값이 undefined이나 null이면, 오류 발생
    - removeItem(Key) : 웹 스토리지에 해당 Key에 해당하는 Key와 Value 삭제
      + 직접 데이터 클릭해서 백스페이스 버튼을 누르면 삭제
*/

// localStorage.setItem("test", "hello");
// localStorage.setItem("person", JSON.stringify({ name: "한수영" }));
console.log(localStorage.getItem("test")); // hello
console.log(JSON.parse(localStorage.getItem("person"))); 
// console.log(JSON.parse(undefined));
localStorage.removeItem("test");
```
   - 확인 : 개발자 도구 - Application - Storage - Local Storage - 사이트별로 데이터 확인 가능

3. 프로젝트에 적용 - App.jsx
```jsx
import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Routes, Route, Link, useNavigate Import
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;

    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }

    case "UPDATE": {
      nextState = state.map((item) =>
        // 타입 맞추기 위해 문자열로 통일
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }

    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext(); // 일기 데이터 공급 Context
export const DiaryDispatchContext = createContext(); // 일기 관련 Dispatch Context

function App() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 여부 : 초기값은 컴포넌트는 로딩 상태로 출발하므로 true
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  /*
    1. useEffect 함수가 완료되기 전에, 즉 내부의 dispatch가 완료되지 않아서 data State 초기값이 설정되지 않았을 때, useDiary 커스텀 훅의 useEffect()가 먼저 실행되어 '존재하지 않는 일기입니다!' 발생될 수 있음
    2. 즉, 다른 컴포넌트의 useEffect가 먼저 실행되면서 충돌 발생하므로, 로딩 기능 만들어야 함
  */
  useEffect(() => {
    const storedDate = localStorage.getItem("diary");

    if (!storedDate) {
      return;
    }

    const parsedDate = JSON.parse(storedDate);

    // 배열 형태가 아니면 forEach 오류 발생하므로 조건 체크
    if (!Array.isArray(parsedDate)) {
      setIsLoading(false); // 로딩 완료
      return;
    }

    // 가장 높은 id값 추출
    let maxId = 0;
    parsedDate.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId; // maxId, 가장 높은 값을 idRef.current로 저장

    // useEffect에서 dispatch함수가 실행 되어 state 초기값을 설정하는 순간 로딩 완료
    dispatch({
      type: "INIT",
      data: parsedDate,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  // 로딩이 끝나지 않았으면 페이지가 렌더링되면 안되므로, 조건으로 로딩중 표시
  if (isLoading) {
    setIsLoading(false); // 현재 Local Stroage에 diary Data가 존재하지 않으므로, Loading State의 값이 영원히 true로 유지 : App 컴포넌트의 다음 조건문에 따라 영원히 "데이터 로딩중 ..."이 렌더링되므로 isLoading을 false로 변경
    return <div> 로딩중입니다..! </div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
```
