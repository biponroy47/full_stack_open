import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY;

const getData = (lat, lon) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
  );
  return request.then((response) => response.data);
};

export default { getData };
