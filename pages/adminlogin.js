import React from 'react'
import { getAuth ,signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth'
import {app} from '../firebase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
function adminlogin() {
    const [email,setEmail] = useState()
    const [password ,setPassword]=useState()

    const auth = getAuth(app)
   const router = useRouter();
     const signIn = () =>{
        signInWithEmailAndPassword(auth,email,password)
     .then((userCredential)=>{
        const user = userCredential.user;
        alert("Correct")
        router.push('/adminpage')
     })
     .catch((error)=>{
        alert("enter valid credentials")
        const errorCode = error.code
    const errorMessage = error.message 
    })
     }
  return (
    <div>
      <div className=' flex  flex-col justify-center items-center p-10 mx-10 bg-black h-screen text-green-400 '>
        <div className='flex flex-1 flex-col space-x-1 px-10 py-10'>Enter Your Email<input classname="p-20 text-black" type="text" onChange={(e)=>setEmail(e.target.value)}/></div>
        <div className='flex flex-1 flex-col space-x-1 px-10 py-20 '>Enter Your password<input type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
       <div className='flex justify-center mt-10 rounded-sm bg-gray-400 w-44'><button onClick={signIn}>submit</button></div>
       </div>
    </div>
  )
}

export default adminlogin