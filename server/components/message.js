const {Books,Author} = require("../model/models")
const {body,validationResult} = require("express-validator")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

exports.getHome = async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.arrat()})
  }
  const genres = []
  const books = await Books.find()
  const firstName = await Author.find()
  books.map(e=>(e.genres.map(y=>(genres.push(y)))))
  res.status(200).send({data:{books:books.length,authors:firstName.length,genres:[... new Set(genres)].length}})
}

exports.getAllBooks = async(req,res) => {  
  const data = await Books.find()  
  res.status(200).send({books:
    data.map(e=>(
      e.name
    ))
  })
}

exports.getBooks = async (req,res) => {
  const {name} = req.params
  const data = await Books.find({name:name})
  res.status(200).send(data[0])
}

exports.getAllGenres = async(req,res) => {
  const array = []
  const data = await Books.find()
  data.map(e=>(e.genres.map(y=>(array.push(y)))))
  res.status(200).send({genres:[... new Set(array)]})
}

exports.getByGenres = async(req,res) => {   
  const {genres} = req.params
  const data = await Books.find({genres:genres})
  res.status(200).send({books:
    data.map(e=>(
      e.name
    ))
  })
}

exports.getByAuthor = async(req,res) => {
  const {firstName} = req.params
  const data = await Author.find({firstName:firstName})
  const books = await Books.find({firstName:firstName})
  res.status(200).send({data,books:
    books.map(e => (
      e.name
    ))
    })
}

exports.getAllAuthor = async(req,res) => {
  const data = await Author.find()  
  res.status(200).send({authors:{
    firstName:data.map(e=>(
      e.firstName
    )),
    secondName:data.map(e=>(
      e.secondName
    ))
  }
  })
}

exports.createAuthor = async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    firstName,  
    secondName,
    dateBirth,
    dateDeath
  } = req.body

  const authors = new Author({
    firstName,
    secondName,
    dateBirth,
    dateDeath
  })
  await authors.save()
  res.status(201).send(authors)
}

exports.CreateBooks = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    firstName,
    summary,
    isbn,
    genres,
    name
  } = req.body
  const date = new Date()
  const books = new Books({
    firstName,
    summary,
    isbn,
    genres,
    name,
    date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  })
  await books.save()
  res.status(201).send(books)
}

exports.updateBooks = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const date = new Date()
  const {
    firstName,
    summary,
    isbn,
    genres,
    name
  } = req.body
  await Books.findOneAndUpdate(req.params,{
    firstName,
    summary,
    isbn,
    genres,
    name,
    date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  })
  res.status(201).send("update")
}

exports.updateAuthor = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    firstName,
    secondName,
    dateBirth,
    dateDeath
  } = req.body
  await Author.findOneAndUpdate(req.params,{
    firstName,
    secondName,
    dateBirth,
    dateDeath
  })
  res.status(201).send("update")
}

exports.deleteAuthor = async (req,res) => {
  const {firstName} = req.params
  await Author.deleteOne({firstName:firstName})
  res.status(204).send(req.params)
}

exports.deleteBooks = async (req,res) => {
  const {name} = req.params
  await Books.deleteOne({name:name})
  res.status(204).send(req.params)
}

