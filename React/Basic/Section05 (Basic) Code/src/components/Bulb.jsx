import { useState } from "react"; // React가 제공하는 useState 내장 함수 import

// 전구 역할을 하는 컴포넌트
const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}> ON </h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}> OFF </h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
