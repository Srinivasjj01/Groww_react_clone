import React from 'react';
import single from '../assets/single.jpg'
import double from '../assets/double.jpg'
import triple from '../assets/triple.jpg' 


const Cards = () =>{
    return(
        <div className=' w-full py-[10rem] bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img classname="w-full mx-auto mt-[-3rem] bg-white" src={single} alt='/' />
                    <h2 className='text-2xl font-bold text-center py-6'>Single user</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted user</p>
                        <p className='py-2 border-b mx-8 mt-8'>send upto 2GB</p>
                    </div>
                    <button className=' bg-[#00fd9a] w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-black'>Start trail</button>
                    
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img classname="w-full mx-auto mt-[-3rem] bg-transparent" src={double} alt='/' />
                    <h2 className='text-2xl font-bold text-center py-6'>Partnership</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>1TB storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>3 Granted user</p>
                        <p className='py-2 border-b mx-8 mt-8'>send upto 10GB</p>
                    </div>
                    <button className=' bg-black w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-[#00fd9a]'>Start trail</button>
                    
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img classname="w-full mx-auto mt-[-3rem] bg-white" src={triple} alt='/' />
                    <h2 className='text-2xl font-bold text-center py-6'>Group Account</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 border-b mx-8 mt-8'>5TB storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>10 Granted user</p>
                        <p className='py-2 border-b mx-8 mt-8'>send upto 20GB</p>
                    </div>
                    <button className=' bg-[#00fd9a] w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-black'>Start trail</button>
                    
                </div>
            </div>

        </div>
    )
}
export default Cards;