import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NotFound from '../not-found/NotFound'

const User = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/users")
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const navigate = useNavigate()

  return (
    <div className='container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mt-[80px]'>
      {error && (
        <NotFound/>
      )}
      {
        data?.users.map((user) => (
          <div className='shadow-lg rounded-lg overflow-hidden' key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <div className='overflow-hidden rounded-lg'>
              <img className='w-full object-contain h-[250px]' src={user.image} alt="" />
            </div>
            <div className='p-4'>
              <h3 className='font-bold line-clamp-1' title={user.name}>{user.firstName}</h3>
              <p>age: {user.age}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default User