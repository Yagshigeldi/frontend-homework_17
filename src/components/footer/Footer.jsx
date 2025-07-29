import React from 'react'
import instagramIcon from "../../assets/instagram.svg"
import twitterIcon from "../../assets/twitter.svg"
import facebookIcon from "../../assets/facebook.svg"
import youtubeIcon from "../../assets/youtube.svg"

const Footer = () => {
  return (
    <footer className='mt-[80px] p-10 bg-black'>
      <div className='container flex items-start justify-between gap-6'>
        <div>
          <h3 className='font-semibold text-white mb-4'>Biz haqimizda</h3>
          <p className='text-gray-400'>Topshirish punktlari</p>
          <p className='text-gray-400'>Vakansiyalar</p>
        </div>
        <div>
          <h3 className='font-semibold text-white mb-4'>Foydalanuvchilarga</h3>
          <p className='text-gray-400'>Biz bilan bog'lanish</p>
          <p className='text-gray-400'>Savol-Javob</p>
        </div>
        <div>
          <h3 className='font-semibold text-white mb-4'>Tadbirkorlarga</h3>
          <p className='text-gray-400'>Uzumda soting</p>
          <p className='text-gray-400'>Sotuvchi kabinetiga kirish</p>
          <p className='text-gray-400'>Topshirish punktini ochish</p>
        </div>
        <div>
          <h3 className='font-semibold text-white mb-4'>Uzum ijtimoiy tarmoqlarda</h3>
          <div className='flex gap-6 mt-2'>
            <img className='w-6 h-6' src={instagramIcon} alt="" />
            <img className='w-6 h-6' src={twitterIcon} alt="" />
            <img className='w-6 h-6' src={facebookIcon} alt="" />
            <img className='w-6 h-6' src={youtubeIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer