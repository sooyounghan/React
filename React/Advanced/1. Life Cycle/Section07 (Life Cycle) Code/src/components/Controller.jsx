const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        {" "}
        -10{" "}
      </button>
      <button
        onClickCapture={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClickCapture={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        onClickCapture={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        onClickCapture={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
