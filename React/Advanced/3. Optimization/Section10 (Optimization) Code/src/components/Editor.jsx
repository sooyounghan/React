import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  // input 태그에 대한 state
  const [content, setContent] = useState("");
  const contentRef = useRef(); // Content Reference : 빈 값을 입력했을 때 해당 창에 Focus 설정을 위함

  // input 태그 state 이벤트 핸들러
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 추가 버튼을 누르면, onSubmit 이벤트 핸들러에 onCreate 함수가 등록되어 실행되도록 설정
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 포커스 설정
      return; // 아무것도 입력하지 않은 빈 문자열이면, 해당 이벤트 핸들러 동작 X
    }

    // 인수로 input 태그의 값을 전달 (값을 보관하는 state 변수 필요)
    onCreate(content);
    setContent(""); // 새로운 데이터 입력된 후에 content state값을 빈 문자열로 초기화
  };

  // 엔터키를 입력했을 때 새로운 Todo가 추가되도록 이벤트 핸들러 설정
  const onKeyDown = (e) => {
    // 어떤 키를 눌렀는지에 대한 정보: 이벤트 객체의 keyCode에 저장 (Enter = 13)
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        value={content}
        ref={contentRef}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 To do"
      />
      <button onClick={onSubmit}> 추가 </button>
    </div>
  );
};

export default Editor;
