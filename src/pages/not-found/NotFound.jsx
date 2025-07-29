import React from 'react'
import errorImage from "../../assets/error.png"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto' src={errorImage} alt="" />
      <div className='text-7xl'>404</div>
      <p className='text-lg text-gray-600 mt-2'>Sahifa topilmadi</p>
      <Link to="/">
      <button className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all cursor-pointer'>Go home</button>
      </Link>
    </div>
  )
}

export default NotFound