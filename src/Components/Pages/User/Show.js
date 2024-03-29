import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchUser(){
        let result = await axios.get('http://127.0.0.1:8000/person/')
        // console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{fetchUser()}, [])

  return (
    <div className='container'>
        <div className='row'>
            {
                user.map(obj=>{
                    return(
                        <div className='col-6'>
                            <img src={'http://127.0.0.1:8000' + obj.profile_pic} className='img-thumbnail' />
                            <h3>{obj.fname}</h3>
                            <h3>{obj.lname}</h3>
                            <h3>{obj.email}</h3>
                            <h3>{obj.city}</h3>
                            <h3>{obj.gender}</h3>
                            <NavLink to={`/user/update/${obj.id}`} className='btn btn-outline-warning'>Update</NavLink>
                            <NavLink to={`/user/delete/${obj.id}`} className='btn btn-outline-danger'>Delete</NavLink>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Show