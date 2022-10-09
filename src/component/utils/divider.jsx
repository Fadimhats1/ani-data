import React from 'react'

const Divider = ({left, right}) => {
  return (
    <div className='border-y-2 px-1 py-2 my-4 flex justify-between items-center'>
      {left}
      {right}
    </div>
  )
}

export default Divider