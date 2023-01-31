import React from 'react'
import loginbg from '../src/components/images/loginbg_2.jpg';
import managelyLogo from '../src/components/images/managelyGrey_nobg.png';
import googleImg from '../src/components/images/Googleicon.png'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='h-screen w-screen bg-cover bg-center  place-content-center justify-center items-center ' style={{background:`url(${loginbg})` ,backgroundSize:"contain" , backgroundPosition:"center" }} >
          
            <div  className="h-screen flex justify-center items-center content-center  ">
              <div  className="flex items-center justify-center  border-2 opacity-90 rounded-3xl bg-neutral-900 m-10 p-5">
                    
                <div className='justify-center items-center content-center ' >

                  <a href='/'><img src={managelyLogo} alt="Managely" className='object-contain mb-1 h-20'/></a>
                  <p className="font-medium text-3xl text-center text-white">Register Your Account</p><br />
                  
                  {/* <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">User Name</label><br />
                  <input   name="Text"
                  type="email" className="border-2 w-full pl-2 rounded-full h-8"   placeholder="Email Address"  /><br /><br /> */}
                  
                  <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">Email Address</label><br />
                  <input   name="email"
                  type="email" className="border-2 w-full pl-2 rounded-full h-8"   placeholder="Email Address"  /><br /><br />
                  
                  <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">Password</label><br />
                  <input   name="password"
                  type="password" className="border-2 pl-2 w-full h-8 rounded-full"  placeholder="Password" /><br /><br />

                  <label className="text-lg font-normal leading-8 font-sans text-white pl-2 pb-2">Confirm Password</label><br />
                  <input   name="password"
                  type="password" className="border-2 pl-2 w-full h-8 rounded-full"  placeholder="Confirm Password" /><br /><br />
                  
                  <div className='flex justify-center items-center  mb-2'>
                  <button   className="text-center  text-white p-2 bg-[#393939] hover:text-[#e45a5a] w-48 rounded-2xl">Login</button><br /><br />
                  </div>
                  
                  <p className="font-light text-center text-white">Already have an account? <span className='hover:text-[#e45a5a] cursor-pointer text-[#ffaad6]'><Link to='/Login'>Login</Link></span></p>
                  <p className='font-light text-center text-white pt-1 pb-1'>OR</p>

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

export default Register