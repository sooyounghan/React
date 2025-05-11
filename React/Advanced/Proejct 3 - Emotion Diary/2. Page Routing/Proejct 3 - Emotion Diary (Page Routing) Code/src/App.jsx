import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Routes, Route, Link, useNavigate Import
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

/*
  Page Routing
    1. "/" : 모든 일기를 조회하는 Home 페이지
    2. "/new" : 새로운 일기를 작성하는 New 페이지
    3. "/diary" : 일기를 상세히 조회하는 Diary 페이지지
    4. 리액트는 모든 요소가 컴포넌트로 나눠지므로, 페이지도 컴포넌트로 이루어짐 (src/pages 폴더에 보관관)
*/

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>

      <button onClick={onClickButton}> New 페이지로 이동 </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* path props에 /:값 : /diary 뒤에 어떠한 값이 있다면 이 값은 무조건 동적 경로인 URL 파라미터를 의미 */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
