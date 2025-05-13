import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const nav = useNavigate();

  usePageTitle("새 일기 쓰기");

  // onSubmit 함수는 일기 생성 일 때, onCreate 실행
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); // Home 페이지로 이동, replace : 뒤로가기 방지
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            onClick={() => {
              // -1 : 페이지를 뒤로 이동
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
      />

      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
