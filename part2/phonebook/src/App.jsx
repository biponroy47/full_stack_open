import { useState, useEffect } from "react";
import axios from "axios";

const Filter = (props) => {
  const { handleFilterChange } = props;
  return (
    <div>
      Filter: <input onChange={handleFilterChange} />
    </div>
  );
};

const PersonForm = (props) => {
  const {
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

const Persons = (props) => {
  const { filter, persons } = props;
  return (
    <div>
      {filter === ""
        ? persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <p key={person.id}>
                {person.name} {person.number}
              </p>
            ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} already added to phonebook.`);
      clearInputs();
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newPerson));
      clearInputs();
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const clearInputs = () => {
    setNewName("");
    setNewNumber("");
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>Add a New Number</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
