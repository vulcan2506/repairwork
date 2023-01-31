import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function finalpage() {
  const router = useRouter()
  const sendMessage = () =>{
    router.push('https://wa.me/9769194973')
  }
  const home = () =>{
    router.push('/')
  }
  return (
    <div className='bg-black h-screen'>
      <div className='flex flex-1 flex-col  items-center justify-center p-20 text-2xl text-white'>
        <img className='h-10 w-10'src='../submit-successfully.png'/>Your Order Has Been Submitted To Us . We Will Contact You Soon . Meanwhile You Can Verify Your Order by whatsapping us . Thank You  
        <div className='flex flex-1 flex-col mt-10 items-center justify-center rounded-sm  bg-green-500'>
       <button onClick={sendMessage}>Whatsapp us Now </button> 
        </div>
        </div>
        <div className='flex flex-1 flex-col mt-10 items-center justify-center rounded-sm  bg-white text-black'>
       <button onClick={home}> Wanna place a new order ? Go back to the Home Page !!</button>
        </div>
    </div>
  )
}

export default finalpage