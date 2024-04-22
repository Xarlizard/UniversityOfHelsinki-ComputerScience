const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nameField = process.argv[3]
const numField = process.argv[4] != undefined ? process.argv[4] : ''

const url =
  `mongodb+srv://thecharkrios:${password}@cluster0.ryuajxr.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if(nameField == undefined) {
  
  console.log("phonebook:")
  Person.find({})
    .then(result => {
      result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })

}else{

  const person = new Person({
    name: nameField,
    number: numField,
  })
  
  person.save().then(result => {
    console.log(`added ${nameField} number ${numField} to phonebook`)
    mongoose.connection.close()
  })
}