import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineMoon } from 'react-icons/hi2';
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

export function Sidebar() {
    return (
        <div className='bg-[#f9fafb] h-screen w-20 gap-4 p-4 duration-150 fixed 
      flex flex-col xs:p-2 xs:w-15 xs:gap-2 z-50'>
        <div className='flex flex-row items-center justify-between h-10 p-2'>
          <a href=''>
            <img alt='logo' width='33' height='33' src='./src/assets/uni-lectives.33bdcd1e.svg'>
            </img>
          </a>
        </div>
        <div className='flex flex-col h-full w-full justify-between border-t-2 border-gray-200'>
          <div className='flex flex-col gap-3 py-3 items-center'>
            <div className='group relative inline-block'>
              <a href='' className='text-black hover:text-black '>
                <HiOutlineBookOpen className='w-12 h-12 p-3 hover:bg-slate-200 rounded-xl'></HiOutlineBookOpen>
              </a>
            </div>
            <div className='group relative inline-block'>
              <a href='' className='text-black hover:text-black'>
                <HiOutlineShieldCheck className='w-12 h-12 p-3 hover:bg-slate-200 rounded-xl'></HiOutlineShieldCheck>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4 py-2 items-center'>
            <div className='group relative inline-block'>
             <a href='' className='text-black hover:text-black'>
              <HiBarsArrowUp className='w-12 h-12 p-3 rotate-90 hover:bg-slate-200 rounded-xl cursor-pointer'></HiBarsArrowUp>
             </a>
            </div>

            <div className='group relative inline-block'>
             <a href='' className='text-black hover:text-black'>
              <HiOutlineUserCircle className='w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-pointer'></HiOutlineUserCircle>
             </a>
            </div>

            <div className='group relative inline-block'>
             <a href='' className='text-black hover:text-black'>
              <HiOutlineMoon className='w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-pointer'></HiOutlineMoon>
             </a>
            </div>

            <div className='group relative inline-block'>
             <a href='' className='text-black hover:text-black'>
              <HiArrowLeftOnRectangle className='w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-pointer rotate-180'></HiArrowLeftOnRectangle>
             </a>
            </div>
            
          </div>
        </div>
      </div>
    )
}