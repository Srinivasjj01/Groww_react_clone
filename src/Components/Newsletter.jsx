import React from 'react';

const Newsletter = () => {
    return(
        <div className='w-full py-16 text-white'>
            <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want trip & tricks to Optimize your flow?</h1>
                    <p>Sign up to your Newsletter and stay upto date</p>
                </div>
                <div className='my-4 '>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input classname=" flex p-3 w-[600px] rounded-md text-red-800" type='email' placeholder='Enter email' />
                        <button className='bg-[#00fd9a] w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-black'>Notify Me</button>
                    </div>
                    <p>We care bout the protection of your data. Read your <span className='text-[#00fd9a]'>Privacy policy.</span></p>

                </div>

            </div>
        </div>
    )
}
export default Newsletter;