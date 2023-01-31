import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { Router } from "next/router";
import { useRouter } from "next/router";

const RepairContext = createContext()

const RepairProvider = ({children}) => {
    const router = useRouter();
 const[users,setUsers] = useState([]);
 const[acRepair,setAcRepair] = useState([]);
 const[washingmachineRepair,setWashingMachineRepair] = useState([]);
 const[microwaveRepair,setMicrowaveRepair] = useState([]);
 const[fridgeRepair,setFridgeRepair] = useState([]);
 const[currentUser , setCurrentUser] = useState();
 const[fridgemaintain, setFridgemaintain] = useState([]);
 const[acmaintain, setAcmaintain] = useState([]);
 const[microwavemaintain,setMicrowavemaintain] = useState([]);
 const[washingmachinemaintain,setWashingmachinemaintain] = useState([]);


 
 useEffect(()=>{
    const getUsers = async()=>{
        const querySnapshot = await getDocs(collection(db,'users'))
        setUsers(querySnapshot.docs.map(doc=> {
            return{
            id: doc.id,
            data:{
               ...doc.data()
            } } }
            ))
      }  
      getUsers();
    
})
useEffect(() => {
    const getAcRepairIssues = async() => {
        const querySnapshot = await getDocs(collection(db,'AcRepair'))
        setAcRepair(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                data:{
                    address:doc.data().address,
                    issue:doc.data().issue,
                    image:doc.data().image,
                    pincode: doc.data().pincode,
                    phoneno:doc.data().phoneno,
                    name:doc.data().name
                } } 
         }))
        }
        getAcRepairIssues() 
   },[])

   useEffect(() => {
    const getFridgeRepairIssues = async() => {
        const querySnapshot = await getDocs(collection(db,'Fridge Repair'))
        setFridgeRepair(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                data:{
                    address:doc.data().address,
                    issue:doc.data().issue,
                    image:doc.data().image,
                    pincode: doc.data().pincode,
                    phoneno:doc.data().phoneno,
                    name:doc.data().name
                } } 
         }))
        }
        getFridgeRepairIssues() 
   },[])
   
   useEffect(() => {
    const getOvenIssues = async() => {
        const querySnapshot = await getDocs(collection(db,'Oven Repair'))
        setMicrowaveRepair(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                data:{
                    data:{
                        address:doc.data().address,
                        issue:doc.data().issue,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }
                } } 
         }))
        }
        getOvenIssues() 
   },[])

   useEffect(() => {
    const washingmachineIssues = async() => {
        const querySnapshot = await getDocs(collection(db,'Washing machine Repair'))
        setWashingMachineRepair(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                    data:{
                        address:doc.data().address,
                        issue:doc.data().issue,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }} 
         }))
        }
        washingmachineIssues() 
   },[])

   useEffect(() => {
    const fridgemaintain = async() => {
        const querySnapshot = await getDocs(collection(db,'fridge maintain'))
        setFridgemaintain(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                    data:{
                        address:doc.data().address,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }} 
         }))
        }
        fridgemaintain() 
   },[])


   useEffect(() => {
    const acmaintain = async() => {
        const querySnapshot = await getDocs(collection(db,'ac maintain'))
        setAcmaintain(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                    data:{
                        address:doc.data().address,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }} 
         }))
        }
        acmaintain() 
   },[])

   useEffect(() => {
    const microwavemaintain = async() => {
        const querySnapshot = await getDocs(collection(db,'microwave maintain'))
        setMicrowavemaintain(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                    data:{
                        address:doc.data().address,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }} 
         }))
        }
        microwavemaintain() 
   },[])

   useEffect(() => {
    const washingmachinemaintain = async() => {
        const querySnapshot = await getDocs(collection(db,'washing machine maintain'))
        setWashingmachinemaintain(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                    data:{
                        address:doc.data().address,
                        issue:doc.data().issue,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    }} 
         }))
        }
        washingmachinemaintain() 
   },[])

const addToFirebase = async user =>{
    await setDoc(doc(db,'users',user.email),{
        email:user.email,
        name: user.displayName
    })
}

 const handlUserAuth = async () => {
    const userData = await signInWithPopup(auth,provider);
    const user = userData.user;
    console.log(user)
    setCurrentUser(user)
    addToFirebase(user)
 }

 const checkAuth2 = async () => {
    if(!currentUser){
        await handlUserAuth()
        router.push('/choose/fridge-choose')
       
 }
 else{
 
    router.push('/choose/fridge-choose')
 }

}
const checkAuth3 = async () => {
    if(!currentUser){
        await handlUserAuth()
        router.push('/choose/microwave-choose')
       
 }
 else{
    router.push('/choose/microwave-choose')
 }

}
const checkAuth4 = async () => {
    if(!currentUser){
        await handlUserAuth()
        router.push('/choose/washingmachine-choose')
       }
 else{
   router.push('/choose/washingmachine-choose')
 }

}
const checkAuth = async () => {
    if(!currentUser){
        await handlUserAuth()
        router.push('/choose/ac-choose')
       
 }
 else{
    router.push('/choose/ac-choose')
 }

}

 return(
    <RepairContext.Provider
        value={{users ,handlUserAuth,checkAuth,checkAuth2,checkAuth3,checkAuth4 ,washingmachineRepair ,acRepair ,microwaveRepair ,fridgeRepair , washingmachinemaintain ,microwavemaintain , acmaintain, fridgemaintain}}
    >
        {children}
    </RepairContext.Provider>
 )
 }
export {RepairContext,RepairProvider};