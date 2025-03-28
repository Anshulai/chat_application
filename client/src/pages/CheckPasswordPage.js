import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
import Avatar from '../components/Avatar';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';

const CheckPasswordPage = () => {
  const [data,setData] = useState({
    password : "",
    userId : ""
  })
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!location?.state?.name){
      navigate('/email')
    }
  },[location?.state?.name, navigate])

  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`

    try {
        const response = await axios({
          method :'post',
          url : URL,
          data : {
            userId : location?.state?._id,
            password : data.password
          },
          withCredentials : true
        })

        toast.success(response.data.message)

        if(response.data.success){
            dispatch(setToken(response?.data?.token))
            localStorage.setItem('token',response?.data?.token)

            setData({
              password : "",
            })
            navigate('/')
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className='mt-5'>
        <div className='dark-card w-full max-w-md rounded overflow-hidden p-6 mx-auto'>

            <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
                {/* <PiUserCircle
                  size={80}
                /> */}
                <Avatar
                  width={70}
                  height={70}
                  name={location?.state?.name}
                  imageUrl={location?.state?.profile_pic}
                />
                <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
            </div>

          <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
              

          <div className='flex flex-col gap-1'>
                <label htmlFor='password'>Password :</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='enter your password' 
                  className='dark-input px-3 py-2 rounded w-full'
                  value={data.password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button
               className='dark-button text-lg px-4 py-2 rounded mt-4 w-full leading-relaxed tracking-wide'
              >
                Login
              </button>

          </form>

          <p className='my-4 text-center text-gray-400'><Link to={"/forgot-password"} className='hover:text-highlight font-semibold'>Forgot password ?</Link></p>
        </div>
    </div>
  )
}

export default CheckPasswordPage

