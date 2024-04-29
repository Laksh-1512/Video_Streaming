import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import Live_chat from './Live_chat';


const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const id=searchParams.get("v");
  const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());

    },[])
      
    
  return (
    <div className='px-5 rounded-md'>
      <div className='flex flex-row border  '>
        <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Live_chat></Live_chat>
      </div>

      <Comments></Comments>
    </div>
  )
}

export default WatchPage
