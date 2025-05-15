import React from 'react'



function Card({subname,des1,des2,img}) {
    console.log(img)
  return (
    <div className='flex flex-col w-60 h-80 rounded-xl  mt-5  bg-white shadow-[0_4px_30px_rgba(255,255,255,0.2)] overflow-hidden transition-all ease-in-out duration-300 hover:scale-110'>
      <div className='max-w-full min-h-12  rounded-t-xl bg-blue-950 text-white text-center flex justify-center items-center font-bold p-2'>
        <h3 className='text-xl'>{subname}</h3>
        

      </div>
      <div className='max-w-full h-56 relative'>
        <img src={img} alt="" className='absolute w-full h-full object-cover' />

      </div>
      <div className='max-w-full min-h-12 bottom-0  rounded-b-xl flex flex-col justify-center items-center text-center p-2 '>
        <p className='font-bold'>{des1} </p>
        
        <p className='text-xs'>{des2}</p>
        
        

      </div>
    </div>
  )
}

export default Card
