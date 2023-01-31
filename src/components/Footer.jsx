import React from 'react';

import managelyLogo from './images/managelyGrey_nobg.png';

import {

  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-center justify-center text-gray-300'>
        <div className='mx-5'>
            <img src={managelyLogo} alt="" className='object-contain h-14'/>
            <p className='py-4'>At <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span>, we are always happy to help our customers! <br/> You can check out socials below, we would love to communicate!</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='hover:bg-[#e45a5a] hover:rounded-md cursor-pointer '/>
                <FaInstagram size={30} className='hover:bg-[#e45a5a] hover:rounded-md cursor-pointer '/>
                <FaTwitterSquare size={30} className='hover:bg-[#e45a5a] hover:rounded-md cursor-pointer '/>
                <FaGithubSquare size={30} className='hover:bg-[#e45a5a] hover:rounded-md cursor-pointer '/>
            
            </div>
          </div>
        <div className='lg:col-span-2 mx-5 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-[#e45a5a]'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Analytics</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Marketing</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Commerce</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-[#e45a5a]'>Support</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Pricing</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Documentation</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Guides</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>API Status</li>
            </ul>
        </div>
        
        <div>
            <h6 className='font-medium text-[#e45a5a]'>Legal</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Claim</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Policy</li>
                <li className='py-2 text-sm hover:text-[#e45a5a] cursor-pointer'>Terms</li>
            </ul>
        </div>
      </div>
      <p className='text-center w-screen font-medium text-xl'>All Rights Reserved 2023 Manageley Inc.</p>
    </div>
  );
};

export default Footer;