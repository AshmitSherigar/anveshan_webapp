import React from 'react'
import logo2 from "../assets/images/logo-removebg-preview.png"

const Navigation = () => {
  return (
    <div
      className='h-[9vh] w-full top-0 left-0 absolute z-99 flex items-center justify-between px-10'>



      <div className='flex items-center justify-between'>
      <img className='h-[10vh] w-[10vh]' src={logo2} alt="" />
      <h1 className='uppercase text-2xl'>Anveshan</h1>
      </div>



      <div className='flex items-center justify-between w-[40vw]'>
        <h1>NavLinks</h1>
        <h1>Navlinks</h1>
        <h1>Navlinks</h1>
        <h1>Navlinks</h1>
      </div>

    </div>
  )
}

export default Navigation