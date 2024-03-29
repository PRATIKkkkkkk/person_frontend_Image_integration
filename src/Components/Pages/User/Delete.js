import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const {pk} = useParams()

    const navi = useNavigate()

    function deleteUser(){
        axios.delete(`http://localhost:8000/person/${pk}/`)
        navi('/user/show')
    }

  return (
    <>
    <form onSubmit={()=>{deleteUser()}} >
        <h2>Are you sure you want to delete this user??</h2>
        <input type='submit' value='Delete' />
        <NavLink to='/user/show' className='btn btn-outline-info'>Return</NavLink>
    </form>
    </>
  )
}

export default Delete