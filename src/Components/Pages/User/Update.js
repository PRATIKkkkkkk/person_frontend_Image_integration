import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {pk} = useParams()

    const { register, handleSubmit, setValue } = useForm()

    async function fetchUser(){
        let result = await axios.get(`http://127.0.0.1:8000/person/${pk}/`)
        //console.log('Fetch User', result.data)
        setValue('fname', result.data.fname)
        setValue('lname', result.data.lname)
        //setValue('profile_pic', result.data.profile_pic)
        setValue('email', result.data.email)
        setValue('city', result.data.city)
        setValue('gender', result.data.gender)
    }

    useEffect(()=>{fetchUser()}, [])

    const navi = useNavigate()
    
    async function saveData(data) {
        console.log(data)
        if (data.profile_pic.length > 0) {
        data.profile_pic = data.profile_pic[0]
        } else {
            delete data.profile_pic
        }
        await axios.patch(`http://127.0.0.1:8000/person/${pk}/`, data, {
            'headers': {
                "Content-Type": 'multipart/form-data'
            }
        })
        navi('/user/show')
    }

  return (
    <>
    <form className='container bg bg-dark text-white mt-5' onSubmit={handleSubmit(saveData)} >
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

export default Update