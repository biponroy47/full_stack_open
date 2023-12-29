//to create new react app, run:
//npm create vite@latest FOLDER_NAME — — template react
//cd FOLDER_NAME
//npm install
//npm run dev

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

// const App = () => {
//   const friends = ["Maya", "Keegan"];
//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   );
// };

//----------------------------------
// const App = () => {
// const list = [1, 2, 3, 4, 5, 6];
// list.forEach((value) => {
//   console.log(value);
// });

//const list2 = list.concat(7);
//console.log(list2);

// const list2 = list.map((value) => value * 2);
// console.log(list2);

// const t = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = t;
// console.log(a, b);
// console.log(rest);
//   return <div></div>;
// };
//-----------------------------

// const App = () => {
//   //object literals
//   const obj1 = {
//     name: "Bob",
//     age: 30,
//     job: "phd",
//   };

//   const obj2 = {
//     name: {
//       first: "bill",
//       last: "oconnor",
//     },
//     age: 40,
//     job: "college",
//     favNums: [1, 2, 3, 4],
//   };

//   console.log(obj1.name);

//   //adding properties to objects using .
//   obj1.married = "no";
//   console.log(obj1.married);
//   obj1["kids"] = "none";
//   console.log(obj1.kids);
//   obj1["secret number"] = 24;

//   console.log(obj1);

//   return;
// };
//-------------------------

// const App = () => {
//   const printNum = (p) => p;
//   const sum = (a, b) => a + b;
//   console.log(printNum(5));
//   console.log(sum(1, 2));

//   const t = [1, 2, 3, 4];
//   console.log(t.map((value) => value * value));

//   return;
// };

// const App = () => {
//   const arto = {
//     name: "Arto Hellas",
//     age: 35,
//     education: "PhD",
//     greet: function () {
//       console.log("hello, my name is " + this.name);
//     },
//     add: function (a, b) {
//       console.log(a + b);
//     },
//   };

//   setTimeout(arto.greet.bind(arto), 1000); //preserving "this" in object

//   //   arto.growOlder = function () {
//   //     this.age += 1;
//   //   };
//   //   console.log(arto.age);
//   //   arto.growOlder();
//   //   console.log(arto.age);

//   //   arto.add(2, 4);

//   //   const referenceAdd = arto.add; //no brackets when referencing
//   //   referenceAdd(5, 10);

//   //   const referenceGreet = arto.greet;
//   //   referenceGreet();
// };

//--------------------------------------------

// const App = () => {
//   class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     greet() {
//       console.log("Hello, my name is ", this.name);
//     }
//   }

//   const adam = new Person("Adam", 42);
//   adam.greet();
//   return;
// };

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - props.age;
//   };

//   // const bornYear = function () {
//   //   return new Date().getFullYear() - props.age;
//   // };
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>You were born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };
//---------------------------------------------------

// const Hello = ({ name, age }) => {
//   //directly destructured
//   // const name = props.name;
//   // const age = props.age;

//   //const { name, age } = props; //destructuring object props

//   const bornYear = () => new Date().getFullYear() - age;
//   return (
//     <div>
//       <p>
//         Hello {name} you are {age} years old, you were probably born in{" "}
//         {bornYear()}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   return <Hello name='Bipon' age={20} />;
// };
//----------------------------------------------

// const App = (props) => {
//   const { counter } = props;
//   return <div>{counter}</div>;
// };
//----------------------------------------------

// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   setTimeout(() => setCounter(counter + 1), 1000);
//   console.log("rendering...", counter);
//   return (
//     <div>
//       <p>{counter}</p>
//     </div>
//   );
// };
//----------------------------------------
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("-------\nnew value: ", counter);

  // const handleClick = () => {
  //   console.log("clicked");
  // };
  // return (
  //   <div>
  //     <button onClick={handleClick}>click</button>
  //   </div>
  // );
  const Display = ({ counter }) => <div>{counter}</div>;

  const add = () => {
    console.log("add one, old = ", counter);
    setCounter(counter + 1);
  };
  const minus = () => {
    console.log("minus one, value = ", counter);
    setCounter(counter - 1);
  };

  const reset = () => {
    //console.log("resetting, old = ", counter);
    setCounter(0);
  };

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={add} text='plus' />
      <Button onClick={reset} text='reset' />
      <Button onClick={minus} text='minus' />
    </div>
  );
};

export default App;
