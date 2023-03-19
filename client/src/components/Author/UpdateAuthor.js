import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './UpdateAuthor.css'

const UpdateAuthor = () => {
  const [newFirstName,setNewFirstName] = useState("")
  const [secondName,setSecondName] = useState("")
  const [dateBirth,setBirth] = useState("")
  const [dateDeath,setDeath] = useState("")
  const {firstName} = useParams()
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/update/author/${firstName}`,{
      firstName:newFirstName,secondName:secondName,dateBirth:dateBirth,dateDeath:dateDeath
    })
  }

  return (
    <div style={{width:600,alignItems:'center',display:"flex",flexDirection:'column'}}>
      <form onSubmit={onSubmit}>
        <h1 className='name'>Update Author</h1>
        <h2>First Name</h2>
        <input type="text" id="firstName" required  onChange={e=>setNewFirstName(e.target.value)} placeholder='First Name'/>
        <h2>Second Name</h2>
        <input type="text" id="secondName" required onChange={e=>setSecondName(e.target.value)} placeholder='Second Name'/>
        <h2>Date of Birth</h2>
        <input type="date" className='date' required onChange={e=>setBirth(e.target.value)}/>
        <h2>Date of death</h2>
        <input type="date" className='date' required  onChange={e=>setDeath(e.target.value)}/>
        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default UpdateAuthor