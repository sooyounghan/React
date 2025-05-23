-----
### Edit Page 구현하기
-----
1. Edit 페이지
<div align="center">
<img src="https://github.com/user-attachments/assets/53035ca4-8247-495f-b3f3-49435d530e77">
</div>

2. 컴포넌트 구성
<div align="center">
<img src="https://github.com/user-attachments/assets/af41df4d-1e73-49a3-b958-00642552f934">
</div>

3. UI 구현 - Edit.jsx
```jsx
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams();

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} />}
      />
      <Editor />
    </div>
  );
};

export default Edit;
```

5. 기능 구현
   - Edit.jsx
```jsx
import { useParams, useNavigate, replace } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다!"); // 경고창 발생 (잘못된 일기 수정 번호 접근)
      /*
         1. You should call navigate() in a React.useEffect(), not when your component is first rendered.
         2. navigate 함수는 useEffect()에서 호출되어야 함
         3. 최초 실행 : Edit 컴포넌트가 최초로 호출되어 렌더링 될 때 
          - 하지만 이 때는 컴포넌트가 어떠한 값로 Return 하지 않음
          - 즉, 컴포넌트가 화면에 그려지기 전인 Mount 이전 상태에는 navigate 함수가 동작할 수 없음
         4. 즉, navigate 함수는 컴포넌트들이 다 Mount 된 이후에만 동작 가능
          - 리액트의 라우터의 navigate 같은 기능도 <BroswerRouter> ~ </BroswerRouter>라는 컴포넌트가 공급하는 것
          - 따라서, 이 컴포넌트가 렌더링 되지 않았는데, 호출하는 것은 문제가 되므로 BrowserRouter 컴포넌트가 렌더링 되고 나서 기능 사용 가능
          - 따라서, 컴포넌트가 최초 실행 될 때부터 호출시키는 것이 아닌, useEffect 사용
      */
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]); // params.id가 변경되면, 일기 데이터로부터 find 메서드를 통해 수정하려하는 데이터가 curDiaryItem State에 저장

  const onClickDelete = () => {
    /*
       window.confirm()
        - 브라우저 내장 기능 (확인, 취소 버튼이 있는 팝업창 출력)
        - 인수로 표시할 메세지 가능
        - 확인 : true, 취소 : false 반환
    */

    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(params.id);

      /*
      1. 기존 navigate 함수는 동기적으로 작동
      2. React Router 버전 6에서 7로 올라감에 따라, 비동기적으로 작동
      3. 따라서, navigate 함수 호출 이후 기존 페이지의 useEffect 코드들이 실행 하는 쪽으로 변경
        - 즉, 페이지 이동중에도 기존 페이지의 리액트 훅이나 effect들이 동작
        - 즉, navigate함수가 호출된 이후 onDelete 함수의 처리가 종료되면, data State 변화가 발생하면 useEffect의 콜백 함수가 다시 한 번 실행되고, 페이지 이동 발생
      4. 따라서, 이 시점에 curDiaryItem은 일기 데이터가 없으므로 undefined, 없는 값으로 취급이 되어 alert 발생하므로, useEffect는 params.id에만 영향을 받도록 설정
    */
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?!")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    }

    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
```

  - Editor.jsx
```jsx
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const getStringedDate = (targetDate) => {
  // 날짜의 값을 YYYY-MM-DD로 반환
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(), // Editor 페이지의 createdDate는 Date 객체
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData, // initData의 createdDate : Time Stamp이므로, 이에 한해 Number로 Type-Casting 후, Date 객체로 변경
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  /*
    1. 작성하기 버튼은 생성 / 수정 모두 사용되므로, 생성 / 수정마다 달라야 함
    2. 따라서, props로 onSubmit이라는 함수를 받아, 작성하기 버튼을 누를 때, 이를 전달한 부모 컴포넌트에서 처리하도록 설정
  */
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4> 오늘의 날짜 </h4>
        {/* input 태그 type = date의의 value의 값은 문자열로 받아야함 */}
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4> 오늘의 감정 </h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              // 별도의 컴포넌트가 나열 - 컴포넌트를 누르면 입력이 발생 (즉, 해당 컴포넌트들이 클릭이 되었때, 입력이 발생한 것처럼 이벤트 직접 발생 필요)
              // onClick이라는 props로 화살표 함수 전달 (onChangeInput 함수를 호출시켜, 이벤트 강제 발생하도록 설정 - 즉, 이벤트 객체를 직접 만들어서 전달 (컴포넌트이므로 이벤트 객체가 자동으로 전달되지 않으므로 이벤트 객체를 별도로 생성))
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4> 오늘의 일기 </h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button
          onClick={() => {
            nav(-1);
          }}
          text={"취소하기"}
        />
        <Button
          onClick={onClickSubmitButton}
          text={"작성하기"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
```
