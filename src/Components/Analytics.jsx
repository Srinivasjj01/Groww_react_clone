import React, { forwardRef } from 'react';
import OIP from '../assets/OIP.jpg';

const Analytics =(props,ref) => {
    return(
        <div ref={ref} className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 ' data-aos="zoom-in">
                <img className='max-w-[500px]  mx-auto my-4' src={OIP} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00fd9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam laboriosam id hic, 
                        inventore est assumenda, architecto iure nostrum
                        unde minus impedit magni repudiandae vitae fugiat debitis corporis nihil deleniti?
                    </p>
                    <button className='bg-[#00fd9a] w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-black md:mx-0'>Get Started</button>
                </div>
            </div>

        </div>
    )

}
export  default forwardRef(Analytics);