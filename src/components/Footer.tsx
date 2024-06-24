import { Button, Form } from 'antd'
import EmailInput from './EmailInput'
import logo from '../assets/icon-facebook.svg'
import logoTwo from '../assets/icon-twitter.svg'

const Footer = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-blue-200'>
                <div className=''>
                    <div className='text-center'>35.000 ALREADY JOINED</div>
                    <div className='text-center'>STAY UP TO DATE  with what  were doing</div>
                    <Form className=' flex gap-3'>
                        <EmailInput />
                        <Button>Contact us</Button>
                    </Form>
                </div>
            </div>
            <div className=' w-full bg-blue-700 p-5'>
                <div className='container mx-auto flex justify-between'>
                    <div className='flex gap-5 text-white'>
                        <div>Bookmark</div>
                        <div>Feature</div>
                        <div>Pricing</div>
                        <div>Contact</div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={logo} />
                        <img src={logoTwo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer