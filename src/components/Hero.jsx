import React from 'react'
import video from '../components/images/Managely_introvideo.mp4'
import dashboard from '../components/images/dashboard_image.jpeg'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      
      <div className='md:flex p-8 h-screen justify-center '>
          <div>
            <p className='text-white p-10 md:pl-12 text-5xl'>Make managing easy with</p>
            <p className='text-[#e45a5a] p-10 text-6xl text-center md:text-9xl font-extrabold' style={{fontFamily:"Josefin Sans" }}>managely</p>
          </div>

          <div className=' justify-center '>
          <video muted autoPlay className='rounded-3xl border-2 border-white'>
            <source src= { video } type="video/mp4" />
          </video>
          </div>
      </div>

      <div className='md:flex pl-8 pr-8 pt-5 pb-5 '>
        <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
          <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>Track</h1><br />
          <p className='text-2xl'>Track your warehouse activity with absolute ease!</p><br />
          <p className='text-2xl'>Say no to manual tracking and switch and yes to <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span>. Use latest RFID technique to track your goods!</p>
        </div>

        <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
          <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>Analyse</h1><br />
          <p className='text-2xl'>Our accurate data analysis and analytical strategies helps grow your business to newer heights.</p><br />
          <p className='text-2xl'> </p>
        </div>

        <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
          <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>Effectual</h1><br />
          <p className='text-2xl'>Effiency at its best!</p><br />
          <p className='text-2xl'>Manage your inventory in the most efficient manner with <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span></p>
        </div>

      </div>

      <div className='pt-10 flex mt-32 mb-32'>
        
        <div className='bg-gray-400 p-4 mr-2 rounded-r-3xl w-[60%] md:w-[50%]'>
          <h1 className=' text-[#e45a5a] text-3xl md:text-5xl' style={{fontFamily:"Josefin Sans"}}>Make your business optimized </h1><br />
          <p className='text-lg md:text-2xl'>In this fast moving world, managing your huge and profitable warehouses can become a mess.</p><br/>
          <p className='text-3xl md:text-3xl'>Meet <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span></p><br />
          <p className='text-lg md:text-2xl'>A completely useful and result-oriented product that helps you achieve you monthly targets, retain customers and expand even more</p><br />
          <Link to='/Register'><button className='text-sm md:text-3xl  w-full text-gray-400 bg-neutral-900 p-5 rounded-full '>Get <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span> today</button></Link>          
        </div>

        <div className=' p-4 ml-2 rounded-l-3xl w-[40%] md:w-[50%]'style={{background:`url(${dashboard})` ,backgroundSize:"contain" , backgroundPosition:"center" }}>
          <h1 className=' hidden text-[#e45a5a] text-3xl md:text-5xl' style={{fontFamily:"Josefin Sans"}}>Make your business optimized </h1><br />
          <p className=' hidden text-lg md:text-2xl'>In this fast moving world, managing your huge and profitable warehouses can become a mess.</p><br/>
          <p className='hidden text-3xl md:text-3xl'>Meet <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span></p><br />
          <p className='hidden text-lg md:text-2xl'>A completely useful and result-oriented product that helps you achieve you monthly targets, retain customers and expand even more</p><br />
          <Link to='/Register'><button className='hidden text-sm md:text-3xl  w-full text-gray-400 bg-neutral-900 p-5 rounded-full '>Get <span className='text-[#e45a5a]' style={{fontFamily:"Josefin Sans"}}>managely</span> today</button></Link>          
        </div>
        
        
      
      </div>

      <div className='p-10  bg-gray-400 m-10 text-center rounded-3xl'>
        <p className='text-[#e45a5a] text-5xl border-gray-500 border-2 rounded-3xl md:rounded-full pt-3 pb-3' style={{fontFamily:"Josefin Sans"}}>Check Out the Plans & Pricing We Offer</p>
        <div className='md:flex pt-5'>
          <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
            <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>$99.99/MO</h1><br />
            <ul>
              <li type="square" className='text-xl font-medium'>RFID Tech enabled tracking and data input</li>
              <li type="square" className='text-xl font-medium'>Critical analytics about business and potential growth</li>
              <li type="square" className='text-xl font-medium'>Manage returned goods with ease</li>
              <li type="square" className='text-xl font-medium'>Automate your vast inventory</li>
            </ul>
          </div>

          <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
            <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>$549.99/6MO</h1><br />
            <ul>
              <li type="square" className='text-xl font-medium'>RFID Tech enabled tracking and data input</li>
              <li type="square" className='text-xl font-medium'>Critical analytics about business and potential growth</li>
              <li type="square" className='text-xl font-medium'>Manage returned goods with ease</li>
              <li type="square" className='text-xl font-medium'>Automate your vast inventory</li>
            </ul> 
          </div> 
 
          <div className='bg-gray-400 rounded-2xl p-4 m-2  text-center'>
            <h1 className=' text-[#e45a5a] text-5xl' style={{fontFamily:"Josefin Sans"}}>$929.99/YR</h1><br />
            <ul>
              <li type="square" className='text-xl font-medium'>RFID Tech enabled tracking and data input</li>
              <li type="square" className='text-xl font-medium'>Critical analytics about business and potential growth</li>
              <li type="square" className='text-xl font-medium'>Manage returned goods with ease</li>
              <li type="square" className='text-xl font-medium'>Automate your vast inventory</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='p-10  bg-gray-400 m-10 text-center rounded-3xl'>
        
        <div className='md:flex justify-around'>
        <button className='text-sm md:text-xl text-gray-400 px-5 bg-neutral-900 p-5 rounded-3xl md:rounded-full '><p className='text-[#e45a5a] text-3xl  pt-3 pb-3' style={{fontFamily:"Josefin Sans"}}>Learn More, grow your business with managely</p></button>
        
        </div>

        <div className='md:flex justify-around pt-10 items center '>
          <p className='text-[#e45a5a] text-3xl pt-3 pb-3' style={{fontFamily:"Josefin Sans"}}>Join our monthly NewsLetter</p>
          <input type="email" className='rounded-full w-60 md:w-72 mb-2 md:p-2 border-2 border-black'></input>
          <button className='text-sm md:text-xl text-gray-400 px-5 bg-neutral-900 py-4 rounded-full '>Subscribe to the newsletter</button>
        </div>

      </div>


    </div>
  );
};

export default Hero