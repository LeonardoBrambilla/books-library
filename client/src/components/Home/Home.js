import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './home.css'

const Home = () => {
  const [date,setDate] = useState([])
  useEffect(() => {
    const get = async () => {
      try {
        const {data} = await axios.get("http://localhost:5000/")
        setDate(data.data)
      } catch (error) {
        console.log(error)
      }
    } 
    get() 
  }, [])
  
  
  return (
    <div className='home'>
      <h1>Local Library Home</h1>
        <h2>Welcome to LocalLibrary, a very basic Express website developed as a tutorial example on the Chrome</h2>
      <h1>Dynamic content</h1>
        <h2>The library has the following record counts:</h2>
        <li><strong>Books:</strong><Link className='Link' to="/books">{date.books}</Link></li>
        <li><strong>Authors:</strong><Link className='Link' to="/authors">{date.authors}</Link></li>
        <li><strong>Genres:</strong><Link className='Link' to="/genres">{date.genres}</Link></li>
    </div>
  )
}

export default Home