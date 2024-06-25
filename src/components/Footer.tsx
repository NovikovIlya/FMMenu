import { Button, Form } from 'antd'
import EmailInput from './EmailInput'
import logo from '../assets/icon-facebook.svg'
import logoTwo from '../assets/icon-twitter.svg'

const Footer = () => {
    const onFinish: any = (values:any) => {
        alert('Success:');
      };
      
      const onFinishFailed:any = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
            <div className='flex justify-center items-center bg-blue-200 p-6'>
                <div className=' flex flex-col gap-6'>
                    <div className='text-center '>35.000 ALREADY JOINED</div>
                    <div className='text-center text-3xl font-bold'>STAY UP TO DATE  with what  were doing</div>
                    <Form  onFinish={onFinish}
    onFinishFailed={onFinishFailed} className=' flex gap-3 justify-center'>
                        <EmailInput />
                        <Button htmlType="submit" >Contact us</Button>
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