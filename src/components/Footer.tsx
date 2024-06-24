import { Button, Form } from 'antd'
import React from 'react'
import EmailInput from './EmailInput'

const Footer = () => {
  return (
    <>
    <div className='flex justify-center items-center bg-blue-200'>
        <div className=''>
            <div className='text-center'>35.000 ALREADY JOINED</div>
            <div className='text-center'>STAY UP TO DATE  with what  were doing</div>
            <Form className=' flex gap-3'>
              <EmailInput/>
              <Button>Contact us</Button>
            </Form>
        </div>
    </div>

    <div>
        
    </div>
    </>
  )
}

export default Footer