import React from 'react'
import { useContext } from 'react'
import Link from 'next/link'
import { RepairContext } from '../context/repairContext'
function Navbar() {
  const {currentUser , handlUserAuth} = useContext(RepairContext)
  return (
    <div className='flex my-5 shadow-3xl h-10 bg-green-400 '>
        <button><Link href={'/adminlogin'}><div className ="flex flex-col flex-1 space-x-10 my-0  bg-black px-4 items-center shadow:xl text-white" >Admin Login</div></Link></button>
        <button onClick={handlUserAuth}><div className='flex  flex-col flex-1 justify-end  bg-black items-end rounded-sm shadow-xl text-white'>Customer Login</div></button>
     </div>
  )
}

export default Navbar