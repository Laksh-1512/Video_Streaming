import React from 'react'

const Videocard = ({data}) => {
    
  return (
    <div className='p-2 m-2 w-[15rem] shadow-xl cursor-pointer'>
      <img className="rounded-lg"src={data?.snippet?.thumbnails?.high?.url} alt="img" ></img>
      <ul >
        <li className='font-bold py-2'>{data?.snippet?.localized.title}</li>
        <li>{data?.snippet?.channelTitle}</li>
        <li>{data?.statistics.viewCount} Views </li>
      </ul>
    </div>
  )
}

export default Videocard
