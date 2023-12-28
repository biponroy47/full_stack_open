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

const App = () => {};

export default App;
