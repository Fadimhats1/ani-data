import React from 'react'

const ContainerPage = ({children}) => {
  return (
    <div className='mx-auto bg-slate-800 min-h-[calc(100vh_-_112px)] rounded-md lg:max-w-5xl mt-20 py-6 px-8'>
        {children}
    </div>
  )
}

export default ContainerPage