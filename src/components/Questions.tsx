import React from 'react';
import type { CollapseProps } from 'antd';
import { Button, Collapse, ConfigProvider } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

const Questions: React.FC = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <>
            <div>
                <div className='text-3xl font-bold text-center mt-20 '>Frequenly asked questions</div>
                <div className='flex justify-center'><div className='w-[500px] text-center'>A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free</div></div>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            headerBg: 'rgba(0, 0, 0, 0.00)'
                        },
                    },
                }}
            >
                <Collapse bordered={false} items={items} onChange={onChange} expandIconPosition="right" />
            </ConfigProvider>

            <div className='w-full flex justify-center'><Button className='mt-6'>More info</Button></div>
        </>
    )
};

export default Questions;