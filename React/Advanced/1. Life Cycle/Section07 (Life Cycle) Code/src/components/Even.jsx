import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect 콜백 함수 안에 Return 값으로 새로운 화살표 함수를 더 만들어서 반환
    // useEffect의 콜백 함수가 반환하는 함수 : CleanUp, 정리 함수라고 부르며, 이 함수는 useEffect가 끝날 떄 실행
    // Mount 될 때 실행되며, 종료는 UnMount 시점에 실행
    return () => {
      console.log("UnMount");
    };
  }, []);

  return <div> 짝수 입니다! </div>;
};

export default Even;
