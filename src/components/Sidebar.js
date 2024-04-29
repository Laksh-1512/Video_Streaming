import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const issidebarvisible=useSelector(store=>store.app.isMenuOpen);
  console.log(issidebarvisible);
  return issidebarvisible && (
    <div className='p-5 shadow-lg w-48'>
      <Link to="/"><h1 className='font-semibold text-2xl hover:bg-gray-500 rounded-xl p-1 cursor-pointer'>Home</h1></Link>
      <h1 className='font-semibold text-2xl hover:bg-gray-500 rounded-xl p-1 cursor-pointer'>Shorts</h1>
      <h1 className='font-semibold text-2xl hover:bg-gray-500 rounded-xl p-1 cursor-pointer'>Videos</h1>
      <h1 className='font-semibold text-2xl hover:bg-gray-500 rounded-xl p-1 cursor-pointer'>Live</h1>
      <h1 className='pt-2 font-semibold text-2xl '>subscription</h1>
      <ul >
        <li>CoderHub</li>
        <li>frontend</li>
        <li>DSA</li>
      </ul>
      <h1 className='pt-2 font-semibold text-2xl'>Explore</h1>
      <ul >
        <li>Movies</li>
        <li>Comedy</li>
        <li>horror</li>
        <li>Spicy</li>
        <li>Fun</li>
      </ul>
      <h1 className='pt-2 font-semibold text-2xl'>More </h1>
      <ul >
        <li>YouTube premium</li>
        <li>youtube Kids</li>
        <li>Youtube fun</li>
      </ul>
    </div>
  )
}

export default Sidebar
