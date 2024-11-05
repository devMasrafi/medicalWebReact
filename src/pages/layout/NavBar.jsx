import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className='bg-mainColor py-2'>
      <div className='container mx-auto flex justify-between text-white'>
        <div>
          <ul className='flex items-center capitalize gap-5 font-workSans text-lg font-semibold py-3'>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/service">service</Link>
            </li>
            <li>
              <Link to="/doctors">doctor</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className='capitalize font-workSans font-medium bg-AscColor rounded-full py-3 px-6 '>
            <Link className='text-mainColor' to="/appoinment">appoinment</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NavBar