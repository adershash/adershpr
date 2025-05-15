import React from 'react'
import Card from '../Card/Card'

function Rowspan({heading,data,refval}) {
    console.log(data)
  return (
    <div ref={refval} className='max-w-full m-5 flex flex-col'>
        <div className='mt-3 text-white'>
            <h2 className='text-3xl font-bold'>{heading}</h2>
            <hr />
        </div>
        <div className='overflow-x-auto w-full scrollbar-hide scroll-smooth'>
            <div className='grid grid-flow-col auto-cols-[95%] sm:auto-cols-[60%] md:auto-cols-[40%] lg:auto-cols-[30%]  px-4 py-6'>
                {
                    
                    data.map( (val) => {
                        
                        return(
                       
                        <Card {...val}/>
                     )} )

                }
               


            </div>

        </div>

      
    </div>
  )
}

export default Rowspan
