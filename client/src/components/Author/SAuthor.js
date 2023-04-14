import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams , Link , useNavigate} from 'react-router-dom'

const SAuthor = () => {
  const [sauthor,setAuthor] = useState([])
  const [books,setBooks] = useState([])
  const {firstName} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const get = async () => {      
        const {data} = await axios.get(`https://books-library-server-chi.vercel.app/authors/${firstName}`)
        setAuthor(data.data[0].secondName)
        setBooks(data.books)       
    }
    get()
  }, [])
 
  const onDelete = async () => {
    await axios.delete(`http://localhost:5000/delete/author/${firstName}`)
    navigate("/")
  }

  return (    
    <div>
      <h1 className='name'>{firstName} {sauthor} books</h1>
      { books &&
        books.map(e=>(
          <h1 key={e}>
            <Link className='Link' to={`/books/${e}`}>
              {e}
            </Link>
          </h1>
        ))
      }
      <button className='button2' onClick={onDelete}>delete</button>
      <button className='button'><Link className="Link1" to={`/putAuthor/${firstName}`}>UPDATE</Link></button>
    </div> 
  )
}
 
export default SAuthor