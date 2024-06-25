import { Button } from 'antd'
import React from 'react'
import image from '../assets/logo-bookmark.svg'
import img from '../assets/illustration-features-tab-1.svg'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center mt-4'>
      <div>Bookmark</div>
      <div className='flex gap-4 items-center'>
        <div>Features</div>
        <div>Pricing</div>
        <div>Contact</div>
        <Button>Login</Button>
      </div>
    </div>

    <div className='grid grid-cols-2 mt-20 mb-10 items-center'>
      <div className='flex flex-col gap-4 '>
        <div className='text-2xl font-bold'>A simple bookmark manager</div>
        <div> A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</div>
        <div className='flex gap-4'>
          <Button>Git it in chrome</Button>
          <Button>Git it in firefox</Button>
        </div>
      </div>

      <div>
        <img className='w-full' src={img}/>
      </div>
    </div>
    </>
  )
}

export default Header