const Persons = (props) => {
  const { filter, persons, deletePerson } = props;
  return (
    <div>
      {filter === ""
        ? persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
              <button onClick={() => deletePerson(person.id)}>delete</button>
            </p>
          ))
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <p key={person.id}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person.id)}>delete</button>
              </p>
            ))}
    </div>
  );
};

export default Persons;
