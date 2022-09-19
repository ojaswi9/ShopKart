import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";

function Navbar({productCount}){
  return(
    <div className="bg-white ">
      <div className="max-w-6xl mx-auto flex justify-between">
    <img className ="h-20 " src="https://imgs.search.brave.com/juZtveUoTo1hhKeKvp8O0Q08G2fchCXE-VZiFyxonrQ/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9pbmRp/YW5hcHVibGljbWVk/aWEub3JnL2ltYWdl/cy9uZXdzLWltYWdl/cy9hbWF6b24tbG9n/by5qcGc"/>
     <div className="py-4 flex flex-col items-center text-3xl px-2 text-primary-default"> <HiOutlineShoppingCart/>
     <span>{productCount}</span>
     </div>
      </div>
      </div>
  )
}
export default Navbar;