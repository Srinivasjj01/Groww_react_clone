import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer =() => {
    return(
        <div className='max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className=" w-full font- bold text-3xl text-[#00fd9a] ">REACT.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore error nostrum itaque molestias pariatur hic laborum eius dolor vitae ab optio eveniet, sint, aliquam molestiae possimus tempora, explicabo laudantium.</p>
                <div className='flex justify-between md:w-[75%]'>
                    <FaDribbbleSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h6 className='font-medium text-gray-600'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-600'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guide</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-600'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blogs</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Footer;