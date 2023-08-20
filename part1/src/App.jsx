const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name} you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friend = ["Peter", "Bob"];

  return (
    <>
      <Hello name={friend[0]} age={friend[1]} />
    </>
  );
};

export default App;
