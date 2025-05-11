import { useParams } from "react-router-dom"; // useParams

/*
    useParams Custom Hook : 브라우저에 명시한 URL 파라미터 값을 가져오는 커스텀 훅
*/

const Diary = () => {
  const params = useParams();

  console.log(params); // id : 값

  return <div> {params.id}번 일기입니다. </div>;
};

export default Diary;
