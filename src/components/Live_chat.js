import React, { useEffect, useRef } from 'react';
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../utils/chatSlice';

const Live_chat = () => {
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);
  const text=useRef(null);
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(addmessage({
        name: "Laksh",
        message: text.current.value,
      }))
  }
  useEffect(() => {
    const x = setInterval(() => {
      dispatch(addmessage({
        name: "Laksh",
        message: "Hii there",
      }));
    }, 2000);

    return () => clearInterval(x);
  }, [dispatch]);

  return (
    <div className='h-[60%] border border-black ml-2 rounded-lg w-[35%] flex flex-col justify-between flex-row-reverse'>
      <div className='flex-grow overflow-y-scroll'>
        {chatmessage.map((e, index) => (
          <ChatMessages key={index} name={e.name} comment={e.message} />
        ))}
      </div>
      <form onSubmit={handlesubmit} className='w-full p-2 border-t border-black flex items-center'>
        <input className="flex-grow mr-2 p-1 border border-black" type="text" ref={text}/>
        <button className='px-2 bg-slate-500 text-white'>Submit</button>
      </form>
    </div>
  );
}

export default Live_chat;