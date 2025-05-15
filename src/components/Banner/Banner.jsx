import React, { useContext } from 'react'
import profileimg from "/profile.jpg"
import { scrollcontext } from '../Scrollcomponent/ScrollProvider'
import samplepdf from '/adershprcv.pdf?url'
import {saveAs} from 'file-saver'


function Banner() {
  const {home,contact}=useContext(scrollcontext)

  function handleDownload(){
    fetch(samplepdf).then((res)=>res.blob()).then((blob)=>{saveAs(blob,'cv.pdf')})

  }
  return (
    <div ref={home} className='max-w-full flex flex-col  mt-5 sm:flex-row'>
        
        <div className='max-w-full  flex justify-center sm:w-1/2  '>
        <img src={profileimg} alt="my image" className='w-auto sm:w-1/2 rounded-lg ' />
                
                
        </div>
        <div className='max-w-full h-auto p-4  text-white text-center sm:w-1/2  flex flex-col justify-center'>
            <h1 className='text-5xl font-bold'>Adersh P R</h1>
            <p className='mt-3'>Skilled Full Stack Developer with expertise in front-end and back-end technologies, including React, Node.js,
                 and MongoDB. Experienced in building responsive web applications, RESTful APIs, and
                  working with cloud platforms like AWS. Strong problem-solver with a focus on performance, scalability, and clean code.</p>
                  <div className='space-x-4 mt-5'>
                    <button className=' bg-red-700  border-blue-900 rounded-full w-28 h-7 text-center transition-all ease-in-out duration-300 hover:bg-orange-600 hover:translate-y-1'onClick={()=>{contact.current?.scrollIntoView({behavior:'smooth'})}}>Contact me</button>
                    <button  className=' bg-red-700  border-blue-900 rounded-full w-28 h-7 text-center transition-all ease-in-out duration-300 hover:bg-orange-600 hover:translate-y-1' onClick={handleDownload}>Download</button>
                  </div>
        </div>

      
    </div>
  )
}

export default Banner
