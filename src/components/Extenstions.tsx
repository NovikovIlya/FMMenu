import React from 'react'
import chrome from '../assets/logo-chrome.svg'
import firefox from '../assets/logo-firefox.svg'
import opera from '../assets/logo-opera.svg'
import dot from '../assets/bg-dots.svg'
import { Button } from 'antd'

const Extenstions = () => {
  return (
    <div className='mt-16 mb-5 flex justify-center gap-6 h-[400px]'>
        <div className='flex flex-wrap flex-col gap-5 w-fit w-[250px] shadow-md p-5 relative self-start'>
            <div className='flex justify-center'><img className='w-[60px]' src={chrome}/></div>
            <div className='text-center text-xl font-bold'>Add to chrome</div>
            <div className='text-center'>Minimum version 62</div>
            <img className='absolute bottom-[70px] left-0 ' src={dot}/>
            <Button className='mt-5'>Add to install extension</Button>
        </div>

        <div className='flex flex-wrap flex-col gap-5 w-fit w-[250px] shadow-md p-5 relative self-center'>
            <div className='flex justify-center'><img className='w-[60px]' src={chrome}/></div>
            <div className='text-center text-xl font-bold'>Add to chrome</div>
            <div className='text-center'>Minimum version 62</div>
            <img className='absolute bottom-[70px] left-0 ' src={dot}/>
            <Button className='mt-5'>Add to install extension</Button>
        </div>

        <div className='flex flex-wrap flex-col gap-5 w-fit w-[250px] shadow-md p-5 relative self-end'>
            <div className='flex justify-center'><img className='w-[60px]' src={chrome}/></div>
            <div className='text-center text-xl font-bold'>Add to chrome</div>
            <div className='text-center'>Minimum version 62</div>
            <img className='absolute bottom-[70px] left-0 ' src={dot}/>
            <Button className='mt-5'>Add to install extension</Button>
        </div>
    </div>
  )
}

export default Extenstions