import React,{useState} from 'react';
import managelyLogo from './images/managelyGrey_nobg.png';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';



function Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div className='text-[#e45a5a] bg-neutral-900 flex justify-between mx-auto px-5 p-3 h-20  items-center '>

        <a href='/'><img src={managelyLogo} alt="" className='object-contain h-14'/></a>
        <ul className='hidden md:flex'>
            <a href='/About'><li className='p-1 px-3 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>About</li></a>
            <a href='/Contact'><li className='p-1 px-3 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Contact</li></a>
            <a href='/Login'><li className='p-1 px-3 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Login</li></a>
            <a href='/Register'><li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Register</li></a> 
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-neutral-900 p-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <img src={managelyLogo} alt="" className='object-contain h-16'/>
            <ul className='pt-10 uppercase'>
    
                <a href='/About'><li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>About</li></a>
                <a href='/Contact'><li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Contact</li></a>
                <a href='/Login'><li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Login</li></a>
                <a href='/Register'><li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Register</li></a> 

            </ul>
        
        </div>

    </div>
  );
};

export default Navbar