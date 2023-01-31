import React from 'react'
import loginbg from '../src/components/images/loginbg3.jpg';
import managelyLogo from '../src/components/images/managelyGrey_nobg.png';
import googleImg from '../src/components/images/Googleicon.png'
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div className='h-screen w-screen bg-cover bg-center place-content-center justify-center items-center ' style={{background:`url(${loginbg})` ,backgroundSize:"contain" , backgroundPosition:"center" }} >
          
            <div  className="h-screen flex justify-center items-center content-center ">
              <div  className="flex items-center justify-center  border-2 opacity-90 rounded-3xl bg-neutral-900 m-10 p-10">
                    
                <div className='justify-center items-center content-center ' >

                  <a href='/'><img src={managelyLogo} alt="" className='object-contain mb-7 h-20'/></a>
                  <p className="font-medium text-3xl text-center text-white">Login to Your Account</p><br />
                  
                  <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">Email Address</label><br />
                  <input   name="email"
                  type="email" className="border-2 w-full pl-2 rounded-full h-8"   placeholder="Email Address"  /><br /><br />
                  
                  <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">Password</label><br />
                  <input   name="password"
                  type="password" className="border-2 pl-2 w-full h-8 rounded-full"  placeholder="Password" /><br /><br />
                  
                  <div className='flex justify-center items-center m-2 mb-2'>
                  <button   className="text-center  text-white p-3 bg-[#393939] hover:text-[#e45a5a] w-48 rounded-2xl"><Link to='/Dashboard'>Login</Link></button><br /><br />
                  </div>
                  
                  <p className="font-light text-center text-white pb-2">New to Managely? <span className='hover:text-[#e45a5a] cursor-pointer text-[#ffaad6]'><Link to='/Register'>Join Now</Link></span></p>
                  <p className='font-light text-center text-white pt-1 pb-2'>OR</p>

                  <div className='flex p-2 rounded-full text-white justify-center h-auto cursor-pointer hover:text-[#e45a5a]  bg-[#393939]'>
                    <img src={googleImg} alt="Login with Google" className='object-contain mb-1 h-7'/> 
                    <p className='pl-5 '>Register with Google</p>
                  </div>
                    
                </div>
              </div>

            </div>
          
    </div>
  )
}

export default Login