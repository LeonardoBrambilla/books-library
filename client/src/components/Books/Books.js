import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './books.css'

const Books = () => {
  const [books,setBooks] = useState([])

  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("https://books-library-server-chi.vercel.app/catalog/books")
      setBooks(data.books)
    }
    get()
  }, [])

  return (
    <div className='books'>
      <h1>Book List</h1>
      { books && books.map(e=>(
        <Link className='Link' to={e} key={e}><li>{e}</li></Link>
      ))}
    </div>
  )
}

export default Books