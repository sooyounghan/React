import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default TodoItem;
