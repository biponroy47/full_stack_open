import { useState, useEffect } from "react";
import countriesService from "./services/countries";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [numMatching, setNumMatching] = useState(0);

  useEffect(() => {
    countriesService
      .getAll()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        console.log("Error retrieving data from API.");
      });
  }, []);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);

    setNumMatching(
      countries.filter(
        (country) => country.name.common.includes(newFilter).length
      )
    );
    console.log(numMatching);
  };

  return (
    <div>
      <form>
        Find Countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      {countries.map((country) => (
        <p>{country.name.common}</p>
      ))}
    </div>
  );
};

export default App;
