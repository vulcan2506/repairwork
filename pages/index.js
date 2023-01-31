import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Products from '../components/products'
const Home = () => {
  return (
    <div>
<Navbar/>
<div className='flex justify-center text-2xl'>
  Select One Of Your Electronic Item
   It Needs Repairing or Servicing
</div>
<Products/>
    </div>
  )
}

export default Home
