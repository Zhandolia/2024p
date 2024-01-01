import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout'>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
