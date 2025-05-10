/*
    3. 모듈화
*/
import "./Main.css";

/*
  💡 JSX 주의 사항
    1. 중괄호 내부에는 자바스크립트 표현식만 가능하며, 한 줄로만 작성 가능한 것만 가능 (if, for 등 X)
    2. 숫자나 문자열, 배열의 값만 정상적으로 렌더링되고, 그 외의 값(예) true, undefined, null)은 렌더링 되지 않음
    3. 객체는 렌더링 불가 : Uncaught Error: Objects are not valid as a React child
      + obj.a처럼 문자열이나 숫자값으로 렌더링 하도록 해야함 (점 표기법 또는 프로퍼티 접근 필요)
    4. 모든 태그는 열고 닫혀야 함 (Self-Closing 필요)
    5. 최상위 태그는 반드시 하나이어야 함 (<main> 등)
      + 최상위 태그가 없다면 빈 태그로 묶어주기 (<></>) 
      + 빈 태그로 묶으면, 최상위 태그가 있다고 판단하지만, 실제 렌더링은 최상위 태그가 없는 것으로 설정하여 일반적인 HTML 태그처럼 렌더링
      + 최상위 태그가 있다면, 그 최상위 태그 아레로 HTML 렌더링
*/

const Main = () => {
  const user = {
    name: "한수영",
    isLogin: true,
  }; // 현재 사이트에 접속한 유저 상태 저장하는 변수 user

  // 삼항 연산자가 아닌 조건문으로 처리
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div> 로그인 </div>;
  }

  // return (
  //   <div>
  //     {/* 로그인 상태라면 로그아웃 표시, 로그아웃 상태라면 로그인 출력 */}
  //     {user.isLogin ? (<div> 로그아웃 </div>) : (<div> 로그인 </div>)}
  //   </div>
  // );
};

export default Main;
