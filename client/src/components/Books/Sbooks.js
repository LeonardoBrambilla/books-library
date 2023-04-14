import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams , Link , useNavigate } from 'react-router-dom'
import './sbooks.css'

const Sbooks = () => {
  const [books,setBooks] = useState([])
  const [genres,setGenres] = useState([])
  const {book} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const get = async () => {
      try {  
        const {data} = await axios.get(`https://books-library-server-chi.vercel.app/catalog/books/${book}`)
        setBooks(data)
        setGenres(data.genres)
      } catch (error) {
        console.log(error) 
      }
    }
    get()
  }, [])

  const onDelete = async () => {
    await axios.delete(`http://localhost:5000/delete/books/${book}`)
    navigate("/")
  }

  const onUpdate = async () => {
    navigate(`/putBook/${books.name}`)
  }

  return (
    <div className='sbooks'>
      <h1 className='name'>{books.name}</h1> 
      <div className='info'>
        <h2><strong>Author:</strong> <Link className="Link" to={`/authors/${books.firstName}`}>{books.firstName}</Link></h2> 
        <h2><strong>Summary:</strong>{books.summary}</h2>
        <h2><strong>ISBN:</strong>{books.isbn}</h2> 
        <div className='genres'> <h2><strong>Genres:</strong> </h2>
        {genres && genres.map(e=>(
          <h3 key={e}>
            <Link className='Link' to={`/genres/${e}`}>
              {e}
            </Link> 
          </h3>
        ))}
        </div>
        <h2><strong>Published:</strong> {books.date}</h2>
        <button onClick={onUpdate} className='button'>UPDATE</button>
        <button onClick={onDelete} className='button2'>DELETE</button>
      </div>
    </div> 
  )
}

export default Sbooks