import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-slate-900 overflow-auto min-h-screen'>
      <Outlet /> 
    </div>
  )
}

export default App

