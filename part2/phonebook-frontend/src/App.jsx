import { useState, useEffect } from "react";
import personService from "./services/persons";
import { Filter, PersonForm, Persons, Notification } from "./components";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [newNotification, setNotification] = useState({
    message: null,
    status: null,
  });

  useEffect(() => {
    personService.getAll().then((personsData) => {
      setPersons(personsData);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const oldPerson = persons.find((person) => person.name === newName);
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (oldPerson) {
      if (window.confirm(`${newName}: replace number?`)) {
        personService
          .update(oldPerson.id, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
            setNotification({
              message: `${newPerson.name}: number updated.`,
              status: true,
            });
          })
          .catch((error) => {
            console.log(error.response.data.error);
            setNotification({
              message: `${error.response.data.error}`,
              status: false,
            });
          });
      }
    } else {
      personService
        .create(newPerson)
        .then((addedPerson) => {
          setPersons(persons.concat(addedPerson));
          setNotification({
            message: `${newPerson.name}: added.`,
            status: true,
          });
        })
        .catch((error) => {
          console.log(error.response.data.error);
          setNotification({
            message: `${error.response.data.error}`,
            status: false,
          });
        });
    }
    setTimeout(() => {
      setNotification({
        message: null,
        status: null,
      });
    }, 3000);
    clearInputs();
  };

  const deletePerson = (id) => {
    const thisPerson = persons.find((person) => person.id === id);
    if (window.confirm(`${thisPerson.name}: delete?`)) {
      personService
        .remove(id)
        .then((deletedPerson) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotification({
            message: `${thisPerson.name} does not exist.`,
            status: false,
          });
        });
      setNotification({
        message: `${thisPerson.name}" has been deleted.`,
        status: true,
      });
      setTimeout(() => {
        setNotification({
          message: null,
          status: null,
        });
      }, 3000);
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);
  const clearInputs = () => {
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification
        message={newNotification.message}
        status={newNotification.status}
      />
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
