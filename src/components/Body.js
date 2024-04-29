import React from 'react'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import VideoContainer from './VideoContainer'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
    
  )
}

export default Body
