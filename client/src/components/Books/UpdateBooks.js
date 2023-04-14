import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './UpdateBook.css'

const UpdateBook = () => {
  
  const [newName,setNewName] = useState("")
  const [firstName,setFirstName] = useState("")
  const [summary,setSummary] = useState("")
  const [isbn,setIsbn] = useState("")
  const [genres,setGenres] = useState("")
  const {name} = useParams()
  const onSubmit = async (e) => {
    e.preventDefault()
    const newGenres = genres.split(" ")
    await axios.put(`https://books-library-server-chi.vercel.app/update/books/${name}`,{firstName:firstName,name:newName,summary:summary,isbn:isbn,genres:newGenres})
  }

  return (
    <div style={{width:600,alignItems:'center',display:"flex",flexDirection:'column'}}>
      <form onSubmit={onSubmit}>
        <h1 className='name'>Create Book</h1>
        <h2>Name</h2>
        <input type="text"  required onChange={e=>setNewName(e.target.value)} placeholder='Name'/>
        <h2>First Name</h2>
        <input type="text"  required onChange={e=>setFirstName(e.target.value)} placeholder='First Name'/>
        <h2>Summary</h2>
        <input type="text" required onChange={e=>setSummary(e.target.value)} placeholder="Summary"/>
        <h2>Isbn</h2>
        <input type="text" required onChange={e=>setIsbn(e.target.value)} placeholder="Isbn"/>
        <h2>Genres</h2>
        <input type="text" required onChange={e=>setGenres(e.target.value)} placeholder="Genres"/>
        <button className="button" type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateBook