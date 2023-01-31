import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { RepairContext } from '../context/repairContext'

function products() {
  const {currentUser,checkAuth,checkAuth2,checkAuth3,checkAuth4} = useContext(RepairContext)

  return ( 
    <div>
    <div className='flex p-6 space-x-5 my-10 mx-10 h-60 justify-center shadow-xl'>
      <button onClick={checkAuth}> <div className='hover:shadow-2xl hover:bg-yellow-200 p-4'>Air conditioner<img src="/ac.png"/></div></button> 
      <button onClick={checkAuth2}> <div className='hover:shadow-2xl hover:bg-red-200 p-4 mt-5'>Fridge<img src="/fridge.jpg"/></div></button> 
      <button onClick={checkAuth3}> <div  className='hover:shadow-2xl  hover:bg-blue-200 p-4 justify-center'>Microwave<img src="/microwave.png"/></div> </button> 
      <button onClick={checkAuth4}> <div className='hover:shadow-2xl hover:bg-gray-400 '>Washing Machine<img src="/wm.png"/>  </div></button> 
       </div>
       </div>
       
 
    
      
    
  )
}

export default products 