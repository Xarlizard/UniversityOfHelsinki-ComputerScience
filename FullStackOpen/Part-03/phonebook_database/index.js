require('dotenv').config()
const Person = require('./models/person')
const requestLogger = require('express-requests-logger')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(cors())
app.use(morgan(' :remote-user :method :url :status :res[content-length] :response-time ms :res[content-body] :body'))
app.use(express.static('dist'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', async (request, response) => {
  var date = new Date()
  const count = await Person.find({}).countDocuments()
  response.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
    if (person) {        
      response.json(person)      
    } else {        
      response.status(404).end()      
    }
  })
  .catch(error => next(error))
})

app.post('/api/persons/', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const person = new Person( {
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.put('/api/persons/:id', (request, response, next) => { 
  const body = request.body

  Person.findByIdAndUpdate(request.params.id, body)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {

  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    if(result != null){
      console.log(result)
      response.status(204).end()
    }else{
      return response.status(400).json({ 
        error: 'already deleted' 
      })
    }
  })
  .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})