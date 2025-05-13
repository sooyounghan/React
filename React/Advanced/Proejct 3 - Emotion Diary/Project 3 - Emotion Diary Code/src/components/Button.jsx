import "./Button.css";

/*
    1. 같은 버튼이더라도 긍정적인 초록색 버튼, 일반적인 회색 버튼, 부정적인 빨간색 버튼 구분
    2. type props의 값에 따라 렌더링 하려는 요소의 className을 동적으로 변경되도록 설정해야함
        - Button Button_${type} : 버튼 태그의 className은 전달한 type props에 따라 달라지게 됨
*/
const Button = ({ text, type, onClick }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
