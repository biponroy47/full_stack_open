// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Bill";
//   const age = 42;

//   return (
//     <div>
//       <Hello name='Jeff' age='14' />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };
// ---------------------------------------

// const App = () => {
//   const friends = [
//     { name: "Peter", age: 4 },
//     { name: "Bob", age: 5 },
//   ];

//   return (
//     <div>
//       <p>
//         {friends[0].name} {friends[0].age}
//       </p>
//       <p>
//         {friends[1].name} {friends[1].age}
//       </p>
//     </div>
//   );
// };
//--------------------------------------

const App = () => {
  const friends = ["Maya", "Keegan"];
  return (
    <div>
      <p>{friends}</p>
    </div>
  );
};

export default App;
