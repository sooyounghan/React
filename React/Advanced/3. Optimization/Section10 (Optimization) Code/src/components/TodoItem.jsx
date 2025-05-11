import "./TodoItem.css";
import { memo } from "react";

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

/*
  memo 기능을 통해 TodoItem을 설정하여도 적용전과 똑같음
    1. memo 기능은 제대로 동작
    2. 하지만, checkbox를 수정하여 todo 데이터를 변경하게 되면, 결과적으로 App 컴포넌트의 todos State 값이 변경
    3. 따라서, App 컴포넌트가 리렌더링되고, 해당 함수들이 다시 호출되므로, onCreate / onUpdate / onDelete 등과 같은 함수들도 새롭게 다시 만들어짐
    4. 함수는 객체 타입이므로, 새로 생성된 함수들이 같은 동작을 한다 하더라도 새롭게 생성될 때마다 아예 다른 값으로 인식
    5. 즉, onUpdate, onDelete는 매번 App 컴포넌트가 리렌더링 될 때마다 새롭게 생성되어 전달되는 것
    6. 하지만 memo 메서드는 props가 변경될 때만 컴포넌트를 리렌더링하도록 최적화
    7. 따라서, 매번 리렌더링이 발생할 때마다 현재의 props와 과거의 props를 비교
    8. memo 메서드는 얕은 비교하므로, 객체(함수)는 다른 값으로 인식하므로 props가 변경된 것으로 인식 

    9. 해결 방법
      - 💡 App 컴포넌트에서 함수들 자체를 Memoization해서 리렌더링이 되더라도, 다시 생성하지 않게 방지하는 방법 (useCallback 이용해야 함)
      - TodoItem 컴포넌트 안에 memo 함수 안에 두번째 인수(Callback)을 전달해서 최적화 기능을 커스텀마이징
*/

/*
  HOC (Higer-Order Component) - 고차 컴포넌트
    1. 컴포넌트를 인수로 받아, 해당 컴포넌트에 최적화나 Memoization 같은 추가적 기능을 덧붙여서 새로운 컴포넌트를 반환해주는 것
    2. 한 번 호출하는 것만으로도, 컴포넌트에 새로운 기능을 부여할 수 있으므로 복잡한 리액트 앱 구축 시 많이 사용
    3. 고차 컴포넌트는 memo 메서드말고도 직접 만들 수 있음
*/
/*
export default memo(TodoItem, (prevProps, nextProps) => {
  // 과거의 props와 현재의 props가 바뀌었는지 반환값에 따라 확인 (true : 바뀌지 않음 (리렌더링 X) / false : 바뀜 (리렌더링 O))
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
*/

export default memo(TodoItem);
