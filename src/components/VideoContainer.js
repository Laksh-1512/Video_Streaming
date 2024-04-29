import React,{useEffect, useState} from 'react'
import { Youtube_data_api } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    
    const [video,setvideo]=useState([]);
     const youtubedata=async ()=>{
        const data =await fetch(Youtube_data_api);
        const json=await ( data).json();
        console.log(json.items);
        setvideo(json.items);
    }
    useEffect(()=>{
        youtubedata()
     },[]);

   
  return (
    <div className='flex flex-wrap' >
        {video.map((videos)=>
        (<Link to={"/watch?v="+videos.id} ><Videocard data={videos}></Videocard></Link>))}
      
    </div>
  )
}

export default VideoContainer
