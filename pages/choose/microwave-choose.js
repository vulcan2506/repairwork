import React from 'react'
import { useRouter } from 'next/router'
function microwavechoose() {
  const router = useRouter()

  const switchPage = () =>{
    router.push('/microwave')
  
  }
  
  const switchPage2 = () =>{
    router.push('/maintain/microwave-maintain')
  
  }


  return (
    <div className=' flex flex-1 flex-col text-2xl justify-between items-center my-4 px-10 mt-5'>
      Choose any one Of the option you want 
    <div className='bg-blue-400 h-screen'>
      <div className='flex flex-1 flex-row justify-between mt-20 px-40 space-x-5 '>
        <div className=' hover:bg-black hover:text-white text-2xl'><button onClick={switchPage}><img src='/repair.png'/>Repairing</button></div>
        <div className=' hover:bg-black hover:text-white px-10 text-2xl' ><button onClick={switchPage2}><img src='/Maintenance.png'/>Maintenance</button></div>
      </div>
    </div>
    </div>
  )
}

export default microwavechoose