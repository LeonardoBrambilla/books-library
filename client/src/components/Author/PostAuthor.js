import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './postauthor.css'

const PostAuthor = () => {
  const [firstName,setFirstName] = useState("")
  const [secondName,setSecondName] = useState("")
  const [dateBirth,setBirth] = useState("")
  const [dateDeath,setDeath] = useState("")
  const onSubmit = async (e) => {
    
    e.preventDefault()
    await axios.post("https://books-library-server-chi.vercel.app/create/author",{firstName:firstName,secondName:secondName,dateBirth:dateBirth,dateDeath:dateDeath})
  }

  return (
    <div style={{width:600,alignItems:'center',display:"flex",flexDirection:'column'}}>
      <form  onSubmit={onSubmit}>
        <h1 className='name'>Create Author</h1>
        <h2>First Name</h2>
        <input type="text" id="firstName" required onChange={e=>setFirstName(e.target.value)} placeholder='First Name'/>
        <h2>Second Name</h2>
        <input type="text" id="secondName" required  onChange={e=>setSecondName(e.target.value)} placeholder='Second Name'/>
        <h2>Date of Birth</h2>
        <input type="date" className='date' required onChange={e=>setBirth(e.target.value)}/>
        <h2>Date of death</h2>
        <input type="date" className='date' required onChange={e=>setDeath(e.target.value)}/>
        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default PostAuthor