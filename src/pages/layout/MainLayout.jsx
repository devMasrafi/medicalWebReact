import React from 'react'
import UpperNav from './UpperNav'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <UpperNav/>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default MainLayout