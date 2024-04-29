import React, { useRef, useState } from 'react'
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import SearchOptions from './SearchOptions';

const Head = () => {
  const [search,setsearch]=useState("");
  const [showsugestions,setshowsugestions]=useState(true);
  // const text=useRef(null);
  // console.log(text.current.value);
  const dispatch=useDispatch();
  const handleonclick= ()=>{
        dispatch(toggleMenu());
    }
  return (
    
    <div className='grid grid-flow-col p-1 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={handleonclick} className="h-8 cursor-pointer"alt="sidebar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"/>
        <a href="/" target="_blank">
        <img className="h-8 mx-2 cursor-pointer" alt="youtube icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lLdPW8hsPvNzK0joUiOLsxyZonVGOoEqRLs42yYS&s"/>
        </a>
      </div> 
      <div className="px-10 col-span-10 " >
        <input 
          // ref={text}
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"  
          type="text" 
          value={search} 
          onChange={(e)=>setsearch(e.target.value)}
          onFocus={()=>setshowsugestions(true)}
          onBlur={()=>setshowsugestions(false)}/>
        {search && showsugestions && <SearchOptions search={search}></SearchOptions>}
        <button className="border border-gray-400 px-5 py-2 bg-gray-200 rounded-r-full">🔍</button>
      </div>
        <div>
          <img className="mx-auto m-2 -pt-2 h-[2.5rem]" alt="user_icon" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"></img>
        </div>
        
    </div>
  )
}

export default Head
