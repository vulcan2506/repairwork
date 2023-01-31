import React from 'react'
import { RepairContext } from '../context/repairContext'
import { useContext } from 'react'
import Post from '../components/post'
import AcRepair from '../components/AcRepair'
import FridgeRepair from '../components/FridgeRepair'
import WashingMachineRepair from '../components/WashingMachineRepair'
import MicrowaveMaintain from '../components/MicrowaveMaintain'
import FridgeMaintain from '../components/FridgeMaintain'
import WashingMachineMaintain from '../components/WashingMachineMaintain'
import AcMaintain from '../components/AcMaintain'
function AdminPage() {
  const{ users }= useContext(RepairContext)
  console.log(users, 'users')
  const {washingmachineRepair} = useContext(RepairContext)
  console.log(washingmachineRepair,'washingmachineRepair')
  const {acRepair} = useContext(RepairContext)
  console.log(acRepair,'acRepair')
  const {microwaveRepair} = useContext(RepairContext)
  console.log(microwaveRepair,'microwaveRepair')
  const {fridgeRepair} = useContext(RepairContext)
  console.log(fridgeRepair,'fridgeRepair')
  const {washingmachinemaintain ,microwavemaintain , acmaintain, fridgemaintain} = useContext(RepairContext)
  console.log(washingmachinemaintain ,microwavemaintain , acmaintain, fridgemaintain)
  return (
     
           
      <div className='max-w-7-xl mx-auto'>
           <div className='flex justify-between items-center  bg-yellow-300 border-y
           border-black py-10 lg:py-0 shadow-xl'>
            <div className=' px-10 space-y-5'>
              </div>
              </div>
                <div className=' text-2xl '>
                  Ac Repair
                  {acRepair.map(post => (
                  <AcRepair post={post} key={post.id}/>
                  ))}
                  </div>

                  <div className=' text-2xl '>
                    Fridge Repair
                  {fridgeRepair.map(post => (
                  <FridgeRepair post={post} key={post.id}/>
                  ))}
                  </div>

                  <div className=' text-2xl '>
                    Washing Machine Repair
                  {washingmachineRepair.map(post => (
                  <WashingMachineRepair post={post} key={post.id}/>
                  ))}
                  </div>
                  <div className=' text-2xl '> 
                    Microwave Repair
                  {microwaveRepair.map(post => (
                  <Post post={post} key={post.id}/>
                  ))}
                  </div>
                  <div>
                    Ac Maintain
                    {acmaintain.map(post => (
                  <AcMaintain post={post} key={post.id}/>
                  ))}
                  </div>
                  <div>
                    Fridge Maintain
                    {fridgemaintain.map(post => (
                  <FridgeMaintain post={post} key={post.id}/>
                  ))}
                  </div>
                  <div>
                    microwave Maintain
                    {microwavemaintain.map(post => (
                  <MicrowaveMaintain post={post} key={post.id}/>
                  ))}
                  </div>
                  <div>
                   Washing Machine Maintain
                   {washingmachinemaintain.map(post => (
                  <WashingMachineMaintain post={post} key={post.id}/>
                  ))}
                  </div>

                  </div>
  )
}


export default AdminPage