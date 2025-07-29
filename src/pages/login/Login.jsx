import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6'>
        <h2 className='text-3xl font-bold text-center'>Login</h2>  
        <form className='space-y-4' action="">
          <div>
            <label className='block font-medium mb-1' htmlFor="email">Email</label>
            <input className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none' type="email" name='email' id='email' placeholder='Enter your email' required />
          </div>
          <div>
            <label className='block font-medium mb-1' htmlFor="password">Password</label>
            <input className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none' type="password" name='password' id='password' placeholder='Enter your password' required />
          </div>
          <div className='flex gap-5 mt-10'>
          <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 cursor-pointer' type='submit'>Kirish</button>
          <button onClick={() => navigate("/")} className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 cursor-pointer'>Go home</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login





















