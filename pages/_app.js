import Navbar from '../components/navbar'
import '../styles/globals.css'
import { RepairProvider } from '../context/repairContext'
function MyApp({ Component, pageProps }) {
  
  return(
    <RepairProvider>
    <Component {...pageProps} />
    </RepairProvider>

  )
}

export default MyApp
