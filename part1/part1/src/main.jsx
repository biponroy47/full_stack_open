// import ReactDOM from "react-dom/client";
// import App from "./App";

// let counter = 1;

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App counter={counter} />
//   );
// };

// refresh(); //refresh and update render manually
// counter += 1;
// refresh();
// counter += 1;
// refresh();
// counter += 1;

// setInterval(() => { //interval for function call
//   refresh();
//   ++counter;
// }, 1000);

// ----------------------------------------------

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
