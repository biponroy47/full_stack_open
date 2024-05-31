require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const Person = require("./models/person");

const requestLogger = (request, response, next) => {
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body: ", request.body);
  console.log("---");
  next();
};

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(requestLogger);
app.use((request, response, next) => {
  if (request.method === "POST") {
    morgan("tiny")(request, response, next);
  } else {
    next();
  }
});

app.get("/", (request, response) => {
  response.send("<h1>Phonebook REST Application.</h1>");
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (request, response) => {
  const date = new Date().toString();
  const html_output = `
        <p>Phonebook has info for ${persons.length} people</p><p>${date}<p/>`;
  response.send(html_output);
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const generateID = () => {
  const maxID =
    persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;
  return maxID + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (body.name === undefined) {
    return response.status(400).json({
      error: "Missing name",
    });
  }
  if (body.number === undefined) {
    return response.status(400).json({
      error: "Missing number",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person.save().then((newPerson) => {
    response.json(newPerson);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
