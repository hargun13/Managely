import React,{useState} from 'react';
import managelyLogo from '../src/components/images/managelyGrey_nobg.png';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import tata from '../src/components/images/Tata.jpg'

function Dashboard() {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div>
      {/* *******Navbar********* */}
        <div className='text-[#e45a5a] bg-neutral-900 flex justify-between mx-auto px-5 p-2 h-16  items-center '>
          <a href='/'><img src={managelyLogo} alt="" className='object-contain h-14'/></a>
          <ul className='hidden md:flex'>
            <li className='p-1 px-4 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>My Profile</li>
            <li className='p-1 px-4 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Refurbished Products</li>  
            <li className='p-1 px-4 text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Logout</li> 
          </ul>

          <div onClick={handleNav} className='block md:hidden'>
              {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
          </div>
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-neutral-900 p-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <img src={managelyLogo} alt="" className='object-contain h-16'/>
              <ul className='pt-10 uppercase'>
                <li className='p-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>My Profile</li>
                <li className='p-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Refurbished Products</li>
                <li className='p-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Contact</li> 
                <li className='p-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>Logout</li> 
              </ul>
          </div>
        </div>
      {/* *******Navbar********* */}

      <div className='bg-neutral-900 m-5 p-5 rounded-3xl justify-center items-center h-full'>
        
        <div className='md:flex'>
          
          <div className='bg-[#252525] text-white md:w-[20%] p-2 pb-3 rounded-3xl '>
            <h1 className='text-center text-2xl p-2'>Active Orders</h1>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>
              
              
              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>

              <div className='flex justify-around pt-2 cursor-pointer hover:text-[#e45a5a]'>
                <img src={tata} className='rounded-full h-14' />
                <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
              </div>
    
          </div>
          
          <div className='bg-[#252525] text-white md:w-[80%] p-2 pb-3 rounded-3xl mt-5 md:mt md:ml-5'>
            <h1 className='text-center text-2xl p-2'>Analytics</h1>
          </div>
        
        </div>

        <div className='md:flex pt-5 '>
          
          <div className='bg-[#252525] text-white md:w-[40%] p-2 pb-3 rounded-3xl '>
            <h1 className='text-center text-2xl p-2'>Items Expiring soon</h1>
              <div className='md:flex justify-around'>
                <div>
                  
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                
                </div>

                <div>
                  
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                  <div className='flex justify-center pt-2 cursor-pointer hover:text-[#e45a5a]'>
                    <img src={tata} className='rounded-full mx-4 h-14' />
                    <p className='text-sm'>ABC Company<br/>Lot 1<br />Pending...</p>
                  </div>
                
                </div>
              </div>
    
          </div>
          
          <div className='bg-[#252525] text-white md:w-[60%] p-2 pb-3 rounded-3xl md:mt mt-5 md:ml-5'>
            <h1 className='text-center text-2xl p-2 '>Generate Invoice</h1>
            <div className='flex justify-around'> 
              <img src={tata} className='rounded-full mx-4 h-14'/>   
              <p>ABC Company<br />Date - DD/MM/YY<br/>Status - Completed</p>
              <button className='bg-neutral-900 p-1 rounded-3xl md:px-20 hover:text-[#e45a5a] md:rounded-full '>Generate Invoice</button>   
            </div>
            <div className='flex justify-around pt-4'> 
              <img src={tata} className='rounded-full mx-4 h-14'/>   
              <p>ABC Company<br />Date - DD/MM/YY<br/>Status - Completed</p>
              <button className='bg-neutral-900 p-1 rounded-3xl md:px-20 hover:text-[#e45a5a] md:rounded-full '>Generate Invoice</button>   
            </div>
            <div className='flex justify-around pt-4'> 
              <img src={tata} className='rounded-full mx-4 h-14'/>   
              <p>ABC Company<br />Date - DD/MM/YY<br/>Status - Completed</p>
              <button className='bg-neutral-900 p-1 rounded-3xl md:px-20 hover:text-[#e45a5a] md:rounded-full '>Generate Invoice</button>   
            </div>
            <div className='flex justify-around pt-4'> 
              <img src={tata} className='rounded-full mx-4 h-14'/>   
              <p>ABC Company<br />Date - DD/MM/YY<br/>Status - Completed</p>
              <button className='bg-neutral-900 p-1 rounded-3xl md:px-20 hover:text-[#e45a5a] md:rounded-full '>Generate Invoice</button>   
            </div>
            <div className='flex justify-around pt-4'> 
              <img src={tata} className='rounded-full mx-4 h-14'/>   
              <p>ABC Company<br />Date - DD/MM/YY<br/>Status - Completed</p>
              <button className='bg-neutral-900 p-1 rounded-3xl md:px-20 hover:text-[#e45a5a] md:rounded-full '>Generate Invoice</button>   
            </div>
          </div>
        
        </div>
      
        




      </div>  
    
    </div>
  );
};

export default Dashboard
