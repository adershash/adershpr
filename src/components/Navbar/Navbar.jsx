import React, { useState,useRef, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollcontext } from '../Scrollcomponent/ScrollProvider';

const Navbar = () => {
const {home,education,project,contact}=useContext(scrollcontext)

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo=(ref)=>{
    ref.current?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <nav className="bg-blue-950 shadow-md  top-0 left-0 w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-white transition-all ease-in-out duration-500 hover:text-red-700 hover:text-3xl">Adersh P R</div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu items for medium and larger screens */}
          <div className="hidden md:flex space-x-6">
            <a onClick={()=>scrollTo(home)}  className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Home</a>
            <a onClick={()=>scrollTo(education)}  className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Education</a>
            <a onClick={()=>scrollTo(project)}  className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Project</a>
            <a onClick={()=>scrollTo(contact)} className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Contact</a>
          </div>
        </div>
      </div>

      {/* Slide-down menu for small screens */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 ': 'max-h-0 opacity-0 overflow-hidden'} bg-blue-950 px-4`}>
        <div className="flex flex-col space-y-4 py-4">
          <a onClick={()=>scrollTo(home)} className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Home</a>
          <a onClick={()=>scrollTo(education)} className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Education</a>
          <a onClick={()=>scrollTo(project)} className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-out">Project</a>
          <a onClick={()=>scrollTo(contact)} className="text-white hover:text-red-700 hover:text-lg hover:font-bold hover:cursor-pointer transition-all duration-300 ease-in-outn">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
