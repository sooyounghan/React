import { useEffect } from "react";

const usePageTitle = (title) => {
  // title 변경
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0]; // 페이지의 title 태그 이름이 $title 변수에 저장 (자바스크립트에서 $ : DOM 요소를 저장하는 변수 이름을 만들 때 사용)
    $title.innerText = title;
  }, [title]); // title이 변경될 때 마다, 실행
};

export default usePageTitle;
