import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3> 오늘은 📆 </h3>
      <h1> {new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header); // ESLint 옵션 때문에 경고 메세지 발생 (eslint.config.js에서 "react-refresh/only-export-components": "off" 설정)
