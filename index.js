const express = require('express')
const app = express()

let people = 
[
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 4
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  },
]

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.get('/api/people', (req, res) => {
  res.json(people)
})

app.get('/info', (req, res) => {
  const numberOfPeople = people.length
  console.log(numberOfPeople)
  const reqTime = new Date()
  res.send(`<p>Phonebook has info for ${numberOfPeople} people</p><p>${reqTime}</p>`)
})

app.get('/api/people/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = people.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})