import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const Sbooks = () => {
  const [books,setBooks] = useState([])
  const {genres} = useParams()

  useEffect(() => {
    const get = async () => {
      try {
        const {data} = await axios.get(`http://localhost:5000/catalog/genres/${genres}`)
        setBooks(data.books)
      } catch (error) { 
        console.log(error) 
      }
    }
    get()
  }, [])

  return (
    <div>
      <h1 className='name'>{genres}</h1>
      { books &&
        books.map(e=>(
          <h1>
            <Link className='Link' to={`/books/${e}`}>
              {e}
            </Link>
          </h1>
        ))
      }
    </div> 
  )
}

export default Sbooks