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

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = all != 0 ? (good - bad) / all : 0;
  const positive = all != 0 ? (good / all) * 100 : 0;

  return (
    <div>
      <Header text='Statistics' />
      <Text type='All' value={all} />
      <Text type='Average' value={average} />
      <Text type='Positive' value={positive} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const updateNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const updateBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <div>
      <Header text='Give Feedback' />
      <Button handleClick={updateGood} text={"Good"} />
      <Button handleClick={updateNeutral} text={"Neutral"} />
      <Button handleClick={updateBad} text={"Bad"} />
      <Text type='Good' value={good} />
      <Text type='Neutral' value={neutral} />
      <Text type='Bad' value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
