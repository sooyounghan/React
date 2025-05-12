-----
### Diary 페이지 구현하기
-----
1. Diary 페이지
<div align="center">
<img src="https://github.com/user-attachments/assets/449da912-3eb9-4fd7-8ac2-ddefc1a30da1">
</div>

2. 컴포넌트 구성
<div align="center">
<img src="https://github.com/user-attachments/assets/5e87cad0-8ac3-4961-ad2f-1543497acd3a">
</div>

3. 모듈 분리
  - 감정 이미지에 대한 정보(ID, 이름)를 가지고 있는 List를 모듈화 : constants.js
```js
export const emotionList = [
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
```

  - 해당하는 일기에 대한 정보를 가져오는 함수를 모듈화 : useDiary.jsx
```jsx
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다!"); // 경고창 발생 (잘못된 일기 수정 번호 접근)

      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem; // params.id가 변경되면, 일기 데이터로부터 find 메서드를 통해 수정하려하는 데이터가 curDiaryItem State에 저장
};

export default useDiary;
```

  - useDiary.jsx 모듈화로 인한 Edit.jsx 변경
```jsx
import { useParams, useNavigate, replace } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id); // 💡 useDiary 사용

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(params.id);

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

  - Date 객체를 YYYY-MM-DD 형식으로 바꿔주는 함수를 모듈화 : get-stringed-date.js
```js
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

export default getStringedDate;
```

  - get-Stringed-date.js 모듈화로 Editor.jsx 변경
```jsx
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import getStringedDate from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
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

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4> 오늘의 날짜 </h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)} // 💡get-Stringed-date.js 이용용
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4> 오늘의 감정 </h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
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

4. Diary.jsx
```jsx
import { useParams, useNavigate } from "react-router-dom"; // useParams
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id); // Mount 되기 이전 useDiary의 useState의 값은 없으므로 undefined이고, 이후 렌더링이 되면 해당 값 반환

  if (!curDiaryItem) {
    return <div> 데이터 로딩중! </div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
```

5. View.jsx
```jsx
import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-images.js";
import { emotionList } from "../util/constants.js";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div> {emotionItem.emotionName} </div>
        </div>
      </section>
      <section className="content_section">
        <h4> 오늘의 일기 </h4>
        <div className="content_wrapper">
          <p> {content} </p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
```

  - View.css
```css
.Viewer > section {
  width: 100%;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.Viewer > section > h4 {
  font-size: 22px;
  font-weight: bold;
}

.Viewer .emotion_img_wrapper {
  width: 250px;
  height: 250px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  color: white;
  font-size: 25px;
}

.Viewer .emotion_img_wrapper_1 {
  background-color: rgb(100, 201, 100);
}

.Viewer .emotion_img_wrapper_2 {
  background-color: rgb(157, 215, 114);
}

.Viewer .emotion_img_wrapper_3 {
  background-color: rgb(253, 206, 23);
}

.Viewer .emotion_img_wrapper_4 {
  background-color: rgb(253, 132, 70);
}

.Viewer .emotion_img_wrapper_5 {
  background-color: rgb(253, 86, 95);
}

.Viewer .content_wrapper {
  width: 100%;
  background-color: rgb(236, 236, 236);
  border-radius: 5px;

  word-break: keep-all;
  overflow-wrap: break-word;
}

.Viewer .content_wrapper > p {
  padding: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.5;
}
```
