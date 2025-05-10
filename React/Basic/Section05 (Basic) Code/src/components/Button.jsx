const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e); // 이벤트 객체 (SyntheticBaseEvent : 합성 이벤트 객체) : 발생한 이벤트와 관련된 모든 정보 포함
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
