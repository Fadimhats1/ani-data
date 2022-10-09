import React from 'react'

const CardHomePage = ({src, title}) => {
  return (
    <div className='group bg-red-200 duration-200 my-8 hover:scale-110 ease-in-out rounded relative cursor-pointer lg:w-60 lg:h-60 md:w-52 md:h-52 sm:w-40 h-40'>
       <img className='object-cover w-full h-full rounded-md blur-sm group-hover:blur-none' src={src} alt="" />
       <div className='absolute bottom-4 m-0 text-white w-full left-0 flex justify-center'>
       <span className='sm:text-lg font-bold lg:text-2xl'>{title}</span>
       </div>
    </div>
  )
}

export default CardHomePage