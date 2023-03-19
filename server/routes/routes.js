const express = require('express')
const router = express.Router()
const {body,check} = require("express-validator")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())


const {
  getHome,
  getAllBooks,
  getBooks,
  getAllGenres,
  getByGenres,
  getAllAuthor,
  getByAuthor,
  CreateBooks,
  createAuthor,
  updateAuthor,
  updateBooks,
  deleteAuthor,
  deleteBooks
} = require("../components/message")

router.get("/",getHome)

router.get("/catalog/books",getAllBooks)
router.get("/catalog/books/:name",getBooks)

router.get("/catalog/genres/",getAllGenres)
router.get("/catalog/genres/:genres",getByGenres)

router.get("/authors",getAllAuthor)
router.get("/authors/:firstName",getByAuthor)

router.post("/create/books",[
  body("name").isLength({min:3}).isAlphanumeric().withMessage('The name must be more 5 caracter'),
  body("firstName").isLength({min:3}).isAlphanumeric().withMessage('The firstName must be more 5 caracter'),
  body("summary").isLength({min:3}).isAlphanumeric().withMessage('The summary must be more 5 caracter'),
  body("isbn").isLength({min:3}).isAlphanumeric().withMessage('The isbn must be more 5 caracter'),
  body("genres").isLength({min:3}).isAlphanumeric().withMessage('The genres must be more 5 caracter'),
],CreateBooks)
router.post("/create/author",[
  body("firstName").isLength({min:3}).isAlphanumeric().withMessage('The firstName must be more 5 caracter'),
  body("secondName").isLength({min:3}).isAlphanumeric().withMessage('The secondName must be more 5 caracter')
],createAuthor)


router.put("/update/author/:firstName",[
  body("name").isLength({min:3}).isAlphanumeric().withMessage('The name must be more 5 caracter'),
  body("firstName").isLength({min:3}).isAlphanumeric().withMessage('The firstName must be more 5 caracter'),
  body("summary").isLength({min:3}).isAlphanumeric().withMessage('The summary must be more 5 caracter'),
  body("isbn").isLength({min:3}).isAlphanumeric().withMessage('The isbn must be more 5 caracter'),
  body("genres").isLength({min:3}).isAlphanumeric().withMessage('The genres must be more 5 caracter'),

],updateAuthor)
router.put("/update/books/:name",[
  body("firstName").isLength({min:3}).isAlphanumeric().withMessage('The firstName must be more 5 caracter'),
  body("secondName").isLength({min:3}).isAlphanumeric().withMessage('The secondName must be more 5 caracter')
],updateBooks)

router.delete("/delete/author/:firstName",deleteAuthor)
router.delete("/delete/books/:name",deleteBooks)

module.exports = router