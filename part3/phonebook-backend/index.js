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
  next();
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError")
    return response.status(400).send({ error: "malformatted id" });
  else if (error.name === "ValidationError")
    return response.status(400).json({ error: error.message });
  next(error);
};

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(requestLogger);
app.use((request, response, next) => {
  if (request.method === "POST") morgan("tiny")(request, response, next);
  else next();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

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
  const count = Person.find({}).then((persons) => {
    const html_output = `
        <p>Phonebook has info for ${persons.length} people</p><p>${date}<p/>`;
    response.send(html_output);
  });
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then((newPerson) => {
      response.json(newPerson);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) response.json(person);
      else response.status(404).end();
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const { name, number } = request.body;
  Person.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
