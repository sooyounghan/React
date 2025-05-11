import { useSearchParams } from "react-router-dom"; // useSearchParams

/*
  useSearchParams Custom Hook : 쿼리 파라미터 Custom Hook
    - [params, setParams] = useSearchParams()
    - params : Query String으로 전달한 변수와 값들이 저장
    - setParams : 특정 Query String의 값을 변경할 수 있는 함수
*/
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value")); // Query String에 저장된 값 중 value라는 값을 얻어오기 (get 메서드 이용)

  return <div> Home</div>;
};

export default Home;
