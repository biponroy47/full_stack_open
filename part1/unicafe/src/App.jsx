import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Text = ({ type, value }) => (
  <p>
    {type}: {value}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickedGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    console.log("Good clicked, new good count:", newGood);
  };

  const clickedNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    console.log("Neutral clicked, new neutral count:", newNeutral);
  };

  const clickedBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    console.log("Bad clicked, new bad count:", newBad);
  };

  return (
    <div>
      <Header text='Give Feedback' />
      <Button handleClick={clickedGood} text={"Good"} />
      <Button handleClick={clickedNeutral} text={"Neutral"} />
      <Button handleClick={clickedBad} text={"Bad"} />
      <Header text='Statistics' />
      <Text type='Good' value={good} />
      <Text type='Neutral' value={neutral} />
      <Text type='Bad' value={bad} />
    </div>
  );
};

export default App;
