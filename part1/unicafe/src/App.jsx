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

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const updateGood = () => {
    const newGood = good + 1;
    setGood(newGood);

    const newAll = all + 1;
    setAll(newAll);

    const newAverage = (newGood - bad) / newAll;
    setAverage(newAverage);

    const newPositive = (newGood / newAll) * 100;
    setPositive(newPositive);
  };

  const updateNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);

    const newAll = all + 1;
    setAll(newAll);

    const newAverage = (good - bad) / newAll;
    setAverage(newAverage);

    const newPositive = (good / newAll) * 100;
    setPositive(newPositive);
  };

  const updateBad = () => {
    const newBad = bad + 1;
    setBad(newBad);

    const newAll = all + 1;
    setAll(newAll);

    const newAverage = (good - newBad) / newAll;
    setAverage(newAverage);

    const newPositive = (good / newAll) * 100;
    setPositive(newPositive);
  };

  return (
    <div>
      <Header text='Give Feedback' />
      <Button handleClick={updateGood} text={"Good"} />
      <Button handleClick={updateNeutral} text={"Neutral"} />
      <Button handleClick={updateBad} text={"Bad"} />
      <Header text='Statistics' />
      <Text type='Good' value={good} />
      <Text type='Neutral' value={neutral} />
      <Text type='Bad' value={bad} />
      <Text type='All' value={all} />
      <Text type='Average' value={average} />
      <Text type='Positive' value={positive} />
    </div>
  );
};

export default App;
