import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className='navbar_Link'>
        <Link className='Link' to="/">Home</Link>
        <Link className='Link' to="/books">All Books</Link>
        <Link className='Link' to="/authors">All Authors</Link>
        <Link className='Link' to="/genres">All Genres</Link>
        <span/>
        <Link className='Link' to="/create/book">Create new Books</Link>
        <Link className='Link' to="/create/author">Create new Authors</Link>
      </div>
      <div className='navbar_router'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar