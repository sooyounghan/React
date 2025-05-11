import "./TodoItem.css";
import { memo } from "react";
import { useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        type="checkbox"
        onChange={onChangeCheckBox}
        checked={isDone}
      />
      <div className="Content"> {content} </div>
      <div className="Date"> {new Date(date).toLocaleDateString()} </div>
      <button onClick={onClickDeleteButton}> 삭제 </button>
    </div>
  );
};

export default memo(TodoItem);
