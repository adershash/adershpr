import { useState } from 'react';
import React from 'react'
import { Menu, X } from 'lucide-react';

function Sample() {
     const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='bg-blue-600 w-full fixed z-50 top-0 left-0 shadow-md'>
        <div className='max-w-7xl mx-auto px-4 bg-red-500'>
            <div className='flex justify-between items-center h-16 bg-yellow-500'>
                <div className='text-xl text-bold text-gray-700'>
                    Logo
                </div>

                <div className="md:flex">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
                <div className='flex space-x-6'>
                    <a href="">hai</a>
                     <a href="">hai</a>
                      <a href="">hai</a>
                       <a href="">hai</a>
                        <a href="">hai</a>
                </div>

            </div>

        </div>

    </nav>
  )
}

export default Sample
