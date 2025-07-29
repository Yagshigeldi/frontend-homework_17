import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../not-found/NotFound'

const ProductDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setData(res.data)
        setActiveImage(res.data.images[0])
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-[50px]'>
      {error && (
        <NotFound/>
      )}
      <div>
        <img
          src={activeImage}
          className='w-full h-[400px] object-contain rounded-lg border shadow-md'
          alt=""
        />
        <div className='flex gap-3 mt-4 overflow-x-auto'>
          {
            data?.images?.map((url, inx) => (
              <img
                onClick={() => setActiveImage(url)}
                src={url}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  activeImage === url ? 'border-blue-600 ring-2 ring-blue-400' : 'hover:border-gray-400'
                }`}
                key={inx}
                alt=""
              />
            ))
          }
        </div>
      </div>

      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-4'>{data?.title}</h1>
          <p className='text-gray-700 mb-4'>{data?.description}</p>
          <p className='text-xl font-semibold text-green-600 mb-2'>${data?.price}</p>
          <p className='text-yellow-500 mb-2 font-medium'>⭐ {data?.rating} / 5</p>
          <p className='text-sm text-gray-500 mb-1'>Kategoriya: <span className='text-black font-medium'>{data?.category}</span></p>
          <p className='text-sm text-gray-500'>Brend: <span className='text-black font-medium'>{data?.brand}</span></p>
        </div>
        <button className='mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition'>
          Xarid qilish
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
