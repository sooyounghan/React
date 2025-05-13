import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

// 해당 월에 해당하는 일기 데이터 추출
const getMonthlyData = (pivotDate, data) => {
  // 해당 월의 시작되는 시간과 끝 시간을 알아야 함 : 이번달에 작성된 일기임을 확인하기 위함
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime(); // pivotDate의 년도, 월의 1일 0시 0분 0초의 시간
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime(); // pivotDate의 년도, 월의 다음달의 0일(= 그 전달의 마지막 날) 0시 0분 0초의 시간

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  usePageTitle("감정 일기장");

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
