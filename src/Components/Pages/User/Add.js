import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()
    
    function saveData(data) {
        // console.log(data)
        data.profile_pic = data.profile_pic[0]
        axios.post('http://127.0.0.1:8000/person/', data,{
            'headers': {
                "Content-Type": 'multipart/form-data'
            }
        })
        navi('/user/show')
    }

  return (
    <>
    <form className='container bg bg-dark text-white mt-5' onSubmit={handleSubmit(saveData)} encType='multipart/form-data' >
        <label htmlFor='fn'>Enter First Name:</label>
        <input type='text' id='fn' className='form-control' {...register('fname')} />
        <br />
        <label htmlFor='ln'>Enter Last Name</label>
        <input type='text' id='ln' className='form-control' {...register('lname')} />
        <br />
        <label htmlFor='profile'>Add Your Profile Picture:</label>
        <input type='file' id='profile' className='form-control' {...register('profile_pic')} />
        <br />
        <label htmlFor='email'>Enter Email:</label>
        <input type='email' id='email' className='form-control' {...register('email')} />
        <br />
        <label htmlFor='city'>City:</label>
        <input type='text' id='city' className='form-control' {...register('city')} />
        <br />
        <label htmlFor='gender'>Gender:</label>
        Male<input type='radio' id='gender' value='Male' className='form-check-input me-5' {...register('gender')} />
        Female<input type='radio' id='gender' value='female' className='form-check-input ' {...register('gender')} />
        <br />
        <input type='submit' className='btn btn-outline-success col-6' />
        <input type='reset' className='btn btn-outline-danger col-6' />
    </form>
    </>
  )
}

export default Add