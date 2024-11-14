import React from 'react'
import UpperNav from './UpperNav'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
        <UpperNav/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout