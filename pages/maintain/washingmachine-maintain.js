import React from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { db } from '../../firebase'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { RepairContext } from '../../context/repairContext'
import { useRouter } from 'next/router'
function washingmachinemaintain() {
  const {currentUser, setCurrentUser} = useContext(RepairContext)
  const [name,setName] = useState('')
  const [phoneno ,setPhoneNo] = useState('')
  const [address,setAddress] = useState('')
  const [image,setImage] = useState('')
  const [pincode , setPinCode] = useState('')
  const router = useRouter()
  const addIssue = async event =>{
    event.preventDefault()
    await addDoc(collection(db,'washing machine maintain'),{
      address:String(address),
      image:String(image),
      pincode: Number(pincode),
      phoneno:Number(phoneno),
      name:String(name)
       
    })
    router.push('/finalpage')
  }
  return (
    <div>
    <div className='bg-green-200'>
            <div className='flex justify-center text-3xl shadow-sm bg-red-300 space-x-4 mt-10 p-4 h-40 w-40  '> 
              Welcome to Ac repair page
            </div>
            <div className='flex  text-3xl items-center'>
              Enter your details bellow
             </div>
             <div className='mt-5 hover:shadow-2xl hover:mx-10 hover:px-10 hover:bg-red-300 bg-yellow-500 text-xl'>
             Name :- <input type="text" value={currentUser} onChange={event=>setName(event.target.value)}/>
             </div>
             <div className='mt-5 hover:shadow-2xl hover:mx-10 hover:px-10 hover:bg-red-300 bg-yellow-500 text-xl'>
             Address :- <input type="text" value={address} onChange={event=>setAddress(event.target.value)}/>
             </div>
             <div className='mt-5 hover:shadow-2xl hover:mx-10 hover:px-10 hover:bg-red-300 bg-yellow-500 text-xl'>
             Image :- <input placeholder ="Enter Google Drive Link "type="text" value={image} onChange={event=>setImage(event.target.value)}/>
             </div>
             <div className='mt-5  hover:shadow-2xl hover:mx-10 hover:px-10 hover:bg-red-300 rounded-sm bg-yellow-500 text-xl'>
             Pincode :- <input type="text" value={pincode} onChange={event=>setPinCode(event.target.value)}/>
             </div>
             <div className='mt-5  hover:shadow-2xl hover:mx-10 hover:px-10 hover:bg-red-300 rounded-sm bg-yellow-500 text-xl'>
             Phone Number :- <input type="text" value={phoneno} onChange={event=>setPhoneNo(event.target.value)}/>
             </div>
    </div>
    <div className="flex padding-15 mt-10 space-x-5  h-5 justify-center sticky-bottom-0 rounded-sm bg-black text-white"><button onClick={addIssue}>Submit</button></div>
    </div>
  )
}

export default washingmachinemaintain