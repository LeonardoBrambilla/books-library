import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Author = () => {
  const [array,setArray] = useState([]) 
  useEffect(() => { 
    const get = async () => {
      try {        
        const {data} = await axios.get("https://books-library-server-chi.vercel.app/authors")
        setArray(data.authors.firstName.map(e=>({firstName:e,secondName:data.authors.secondName[data.authors.firstName.indexOf(e)]})))
      } catch (error) {
       console.log(error) 
      }
    }
    get()   
  }, [])
        
  return (
    <div>
      <h1 className='name'>Authors</h1>
      {array && array.map(e=>
        <Link key={e}className='Link' to={`./${e.firstName}`}>
          <li >
            {e.secondName}, {e.firstName}
          </li>
        </Link>
      )}
    </div>
  )
}

export default Author