import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Hello = () => {
  return <div> Hello </div>;
};

// <App /> 를 <Hello /> 로 컴포넌트를 변경하면 Root 컴포넌트는 <Hello />
createRoot(document.getElementById("root")).render(<App />);
