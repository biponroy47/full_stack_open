import { useState, useEffect } from "react";
import countriesService from "./services/countries";

const CountriesDisplay = ({ filtered }) => {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [show, setShow] = useState(false);

  const Country = ({ index }) => {
    return (
      <div>
        <h1>{filtered[index].name.common}</h1>
        <p>Capital: {filtered[index].capital[0]}</p>
        <p>Area: {filtered[index].area}</p>
        <b>Languages:</b>
        <ul>
          {Object.keys(filtered[index].languages).map((key) => (
            <li key={key}>{filtered[index].languages[key]}</li>
          ))}
        </ul>
        <img src={filtered[index].flags.png} alt='' />
      </div>
    );
  };

  const showCountry = (index) => {
    setShow(true);
    setCurrentCountry(index);
    setTimeout(() => setShow(false), 3000);
  };

  if (show === true) return <Country index={currentCountry} />;
  else if (filtered.length === 1) {
    () => setCurrentCountry(0);
    return <Country index={currentCountry} />;
  } else if (filtered.length > 1 && filtered.length < 10) {
    return filtered.map((country, index) => (
      <div key={index}>
        <p>
          {country.name.common}{" "}
          <button onClick={() => showCountry(index)}>Show</button>
        </p>
      </div>
    ));
  } else return <p>Too many countries, please specify.</p>;
};

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

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
    setFiltered(
      countries.filter((country) =>
        country.name.common.toUpperCase().includes(newFilter.toUpperCase())
      )
    );
    setFilter(newFilter);
  };

  return (
    <div>
      <form>
        Find Countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <CountriesDisplay filtered={filtered} />
    </div>
  );
};

export default App;
