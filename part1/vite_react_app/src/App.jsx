import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ counter }) => <div>{counter}</div>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter}></Display>
      <Button handleClick={increaseByOne} text='Add 1'></Button>
      <Button handleClick={decreaseByOne} text='Minus 1'></Button>
      <Button handleClick={setToZero} text='Reset'></Button>
    </div>
  );
};

export default App;
