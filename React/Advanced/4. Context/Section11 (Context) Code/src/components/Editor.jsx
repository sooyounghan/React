import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext); // 인수로 데이터를 직접 가져오고자 하는 Context를 가져와야 함함

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
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
