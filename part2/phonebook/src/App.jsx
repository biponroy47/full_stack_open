import { useState, useEffect } from "react";
import personService from "./services/persons";
import { Filter, PersonForm, Persons, Notification } from "./components";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [newNotification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((personsData) => {
      setPersons(personsData);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      if (window.confirm(`${newName} already exists, replace number?`)) {
        const oldPerson = persons.filter((person) => person.name === newName);
        const newPerson = {
          name: newName,
          number: newNumber,
        };
        personService
          .update(oldPerson[0].id, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
          })
          .catch((error) => {
            setNotification(`"${newPerson.name}" does not exist!`);
            setTimeout(() => {
              setNotification(null);
            }, 3000);
          });
        setNotification(`"${newPerson.name}" has been updated.`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);

        clearInputs();
      } else clearInputs();
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personService.create(newPerson).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
      });
      setNotification(`"${newPerson.name}" has been added.`);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
      clearInputs();
    }
  };

  const deletePerson = (id) => {
    const thisPerson = persons.filter((person) => person.id === id);
    if (window.confirm(`Delete ${thisPerson[0].name}?`)) {
      personService
        .remove(id)
        .then((deletedPerson) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotification(`"${thisPerson[0].name}" does not exist!.`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        });
      setNotification(`"${thisPerson[0].name}" has been deleted.`);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
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
      <Notification message={newNotification} />
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
      <Persons filter={filter} persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
