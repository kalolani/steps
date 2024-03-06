import { useState } from "react";

const messages = [
  "Learn React ☸",
  "Apply for job 💼",
  "Invest your new income🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <MessageText step={1}>
        <h3>pass in content</h3>
        <p>🤞</p>
      </MessageText>
      <MessageText step={2}>
        <h3>read children prop</h3>
        <p>🤞</p>
      </MessageText>
    </div>
  );
}

function Steps() {
  const [step, setState] = useState(1);

  const [isOpen, setOpen] = useState(true);

  //const step = 1;

  function handlePrevious() {
    if (step > 1) {
      setState((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setState((s) => s + 1);
    }
  }
  function btnClose() {
    setOpen((s) => !s);
  }

  return (
    <>
      <button className="close" onClick={btnClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <MessageText step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor={"#e7e7e7"}
                textColor={"#333"}
                onClick={(e) => alert(`learn how to ${messages[step - 1]}`)}
              >
                button
              </Button>
            </div>
          </MessageText>
          <div className="buttons">
            <Button
              bgColor={"#7950F2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              <span> 👈 Previous</span>
            </Button>

            <Button bgColor={"#7950F2"} textColor={"#fff"} onClick={handleNext}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function MessageText({ step, children }) {
  return (
    <p className="message">
      <h3>step {step}</h3>
      {children}
    </p>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
