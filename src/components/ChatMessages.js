import React from 'react'

const ChatMessages = ({name, comment}) => {
  return (
    <div className='flex items-center shadow-sm m-1'>
      <img className='h-8 ml-1' src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg" alt="" />
      <span className='mt-1 font-bold text-lg '>{name}:</span>
      <span className='ml-1 mt-1'>{comment }</span>
    </div>
  )
}

export default ChatMessages
