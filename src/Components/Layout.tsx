import AppBar from './AppBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <AppBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout