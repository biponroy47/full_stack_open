import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <Display value={value}></Display>
      <Button handleClick={() => setValue(1000)} text='1000'></Button>
      <Button handleClick={() => setValue(0)} text='0'></Button>
      <Button handleClick={() => setValue(value + 1)} text='+1'></Button>
    </div>
  );
};

export default App;
