import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Genres = () => {
  const [genres,setGenres] = useState([])

  useEffect(() => {
    const get = async () => {
      try {        
        const {data} = await axios.get("https://books-library-server-chi.vercel.app/catalog/genres/")
        setGenres(data.genres)
      } catch (error) {
       console.log(error)  
      }
    }
    get() 
  }, [])

  return (
    <div>
      <h1 className='name'>Genres</h1>
      { genres &&
        genres.map(e=>
          <h1 key={e}>
            <Link className='Link' to={`./${e}`}>
              {e}
            </Link>
          </h1>
      )}
    </div>
  )
}

export default Genres