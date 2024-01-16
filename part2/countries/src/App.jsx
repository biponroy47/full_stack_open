import { useState, useEffect } from "react";
import countriesService from "./services/countries";

const CountriesDisplay = ({ countries, filter }) => {
  const filtered = countries.filter((country) =>
    country.name.common.toUpperCase().includes(filter.toUpperCase())
  );

  console.log(filtered);

  if (filtered.length === 1)
    return (
      <div>
        <h1>{filtered[0].name.common}</h1>
        <p>Capital: {filtered[0].capital[0]}</p>
        <p>Area: {filtered[0].area}</p>
        <b>Languages:</b>
        <ul>
          {Object.keys(filtered[0].languages).map((key) => (
            <li key={key}>{filtered[0].languages[key]}</li>
          ))}
        </ul>
        <img src={filtered[0].flags.png} alt='' />
      </div>
    );
  else if (filtered.length > 1 && filtered.length < 10) {
    return filtered.map((country, index) => (
      <p key={index}>{country.name.common}</p>
    ));
  } else return <p>Too many countries, please specify.</p>;
};

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

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
    setFilter(event.target.value);
  };

  return (
    <div>
      <form>
        Find Countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <CountriesDisplay countries={countries} filter={filter} />
    </div>
  );
};

export default App;
