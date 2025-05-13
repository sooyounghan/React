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
    setIsLoading(false); // 현재 LocalStroage에 diary Data가 존재하지 않으므로, Loading State의 값이 영원히 true로 유지 : App 컴포넌트의 다음 조건문에 따라 영원히 "데이터 로딩중 ..."이 렌더링되므로 isLoading을 false로 변경
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
