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
