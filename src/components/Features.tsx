import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import imgOne from '../assets/illustration-features-tab-1.svg'
import imgTwo from '../assets/illustration-features-tab-2.svg'
import imgThree from '../assets/illustration-features-tab-3.svg'



const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Simple bookmaking',
        children: <div className='flex'>
            <div className='w-[50%] relative h-[350px]'>
                <div className=' '>
                    <img className='p-5 ' src={imgOne} />
                </div>
                <div className='bg-blue-500 p-5 absolute bottom-0 -z-50 w-[90%] rounded-br-3xl h-[50%]'></div>
            </div>

            <div className='w-[50%] flex justify-center items-center flex-col text-left gap-4 p-5'>
                <div className='text-left w-full'>Bookmark is one click</div>
                <div>Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.</div>
                <div className='w-full'> <Button>More info</Button></div>
            </div>
        </div>,
    },
    {
        key: '2',
        label: 'Speedy searching',
        children: <div className='flex'>
            <div className='w-[50%] relative h-[350px]'>
                <div className=' '>
                    <img className='p-5 ' src={imgTwo} />
                </div>
                <div className='bg-blue-500 p-5 absolute bottom-0 -z-50 w-[90%] rounded-br-3xl h-[50%]'></div>
            </div>

            <div className='w-[50%] flex justify-center items-center flex-col text-left gap-4 p-5'>
                <div className='text-left w-full'>texttext</div>
                <div>Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.</div>
                <div className='w-full'> <Button>More info</Button></div>
            </div>
        </div>,
    },
    {
        key: '3',
        label: 'Easy sharing',
        children: <div className='flex'>
            <div className='w-[50%] relative h-[350px]'>
                <div className=' '>
                    <img className='p-5 ' src={imgThree} />
                </div>
                <div className='bg-blue-500 p-5 absolute bottom-0 -z-50 w-[90%] rounded-br-3xl h-[50%]'></div>
            </div>

            <div className='w-[50%] flex justify-center items-center flex-col text-left gap-4 p-5'>
                <div className='text-left w-full'>Teext</div>
                <div>Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.</div>
                <div className='w-full'> <Button>More info</Button></div>
            </div>
        </div>,
    },
];

const Features = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <>
            <div className='text-center mb-20 mt-20'>
                <div className='text-3xl fot-bold '>Features</div>
                <div className='flex justify-center'><div className='w-[500px]'>A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free</div></div>
            </div>
            <div className='flex justify-center w-full'>
                <div className=''>
                    < Tabs centered size='large' defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </div>
        </>
    );
}

export default Features;