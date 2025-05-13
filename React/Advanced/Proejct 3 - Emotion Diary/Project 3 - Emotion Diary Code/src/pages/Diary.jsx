import { useParams, useNavigate } from "react-router-dom"; // useParams
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id); // Mount 되기 이전 useDiary의 useState의 값은 없으므로 undefined이고, 이후 렌더링이 되면 해당 값 반환

  usePageTitle(`${params.id}번 일기`);

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
