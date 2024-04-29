import React, { useEffect, useState } from 'react'
import { Youtube_api_key } from '../utils/constants'

const SearchOptions = ({search}) => {
   const [searcharray,setsearcharray]=useState([]);
    const getSearchOptions=async ()=>{
        const data= await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+search);
        const json=await data.json();
        setsearcharray(json[1]);
    }
    useEffect(()=>{
        const x=setTimeout(() => {
          getSearchOptions();
        }, 200);
        return ()=>{
          clearTimeout(x);
        }
    },[search])
  return (
      <div className='w-[32rem] mx-1 bg-white border border-gray-400 p-2 absolute opacity-95 rounded-md '>
          <ul>
            {searcharray.map((e)=> <li className=' p-1 shadow-sm font-semibold hover:bg-slate-200 rounded-md'>{e}</li>)}
          </ul>
        </div>
    
  )
}

export default SearchOptions
