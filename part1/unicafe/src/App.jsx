import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value, text2 }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    <td>{text2}</td>
  </tr>
);

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;

  if (all === 0) return <p>no feedback given</p>;
  return (
    <table>
      <tbody>
        <StatisticLine text='good' text2='' value={good} />
        <StatisticLine text='neutral' text2='' value={neutral} />
        <StatisticLine text='bad' text2='' value={bad} />
        <StatisticLine text='all' text2='' value={all} />
        <StatisticLine text='average' text2='' value={average} />
        <StatisticLine text='positive' text2='%' value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const clickGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    calculateStats(newGood, neutral, bad);
  };

  const clickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    calculateStats(good, newNeutral, bad);
  };

  const clickBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    calculateStats(good, neutral, newBad);
  };

  const calculateStats = (curGood, curNeutral, curBad) => {
    const newAll = curGood + curNeutral + curBad;
    setAll(newAll);

    const newAverage = (curGood - curBad) / newAll;
    setAverage(newAverage);

    const newPositive = (curGood / newAll) * 100;
    setPositive(newPositive);
  };

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={clickGood} text='good' />
      <Button handleClick={clickNeutral} text='neutral' />
      <Button handleClick={clickBad} text='bad' />
      <Header text='statistics' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
