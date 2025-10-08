import React, { useEffect, useRef, useState } from 'react'
import assets, { messagesDummyData, imagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../Lib/utils'
import { SlArrowLeft } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import RightSideBar from './RightSideBar';



const ChatContainer = ({selectedUser, setSelectedUser, setOpenUser }) => {

  const navigate = useNavigate()
  const scrollEnd = useRef()

  useEffect(() =>{
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({ behavior: "smooth"})
    }
  }, [])
  

  return selectedUser ? (
    <>

    <div className='h-full overflow-scroll relative'>
      {/* header */}
      <div className='flex fixed w-full bg-slate-950 items-center gap-3 py-3 xs:py-4 px-4 border-b border-slate-700 '>
        
          <img src={assets.profile_martin} className='w-8 xs:w-10 rounded-full cursor-pointer' onClick={() => setOpenUser(true)}  />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin johnson 
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <p onClick={() =>setSelectedUser(null)} className='md:hidden xs:text-xl'><SlArrowLeft/></p>
      </div>

             {/*------------- Chat Area -----------------  */}
      <div className='flex mt-20 flex-col h-[calc(100%-150px)] overflow-y-scroll p-3 pb-6'>
          {messagesDummyData.map((msg, index) => (
            <div key={index} className={`flex w-full items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
              {msg.image ? (
                <img src={msg.image} alt="" className='max-w-[450px] border border-slate-700 rounded-lg overflow-hidden mb-8'/>
              ) : (
                <p className={`p-2 max-w-[600px] xs:text-lg font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
              )}
              <div className='text-center text-xs xs:text-sm'>
                <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt="" className='w-7 xs:w-9 rounded-full' />
                <p className='text-gray-500'>{formatMessageTime(msg.createdAt)}</p>

              </div>
            </div>
          ))}
           
        <div ref={scrollEnd}>
        </div>
        {/* --------------- bottom area --------------------- */}

        <div className='absolute w-full bottom-0 right-0 flex items-center gap-3 p-3 xs:p-4 '>
          <div className='flex-1  flex items-center bg-slate-100/12 px-3 rounded-full'>
            <input type="text" placeholder="send a message"
             className='flex-1  text-sm xs:text-lg p-3 border-none rounded-lg outline-none text-white placeholder-slate-500'/>
            <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image">
              <img src={assets.gallery_icon} alt="" className='w-5 mr-2  cursor-pointer'/>
            </label>
          </div>
          {/* <img src={assets.send_button} alt="" className='w-7 cursor-pointer' /> */}
          <p className='text-2xl xs:text-3xl cursor-pointer mr-2'><IoIosSend/></p>
        </div>

      </div>
    </div>
    </>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-slate-800/10 max-md:hidden'>
      <img src={assets.logo} alt="" className='max-w-28' />
      <p className='text-lg flex flex-col text-white text-center'>Mood for GupShup ! 
        <span className='text-center text-5xl mt-2 font-serif font-semibold 
        bg-gradient-to-r from-[#4bb7ff] to-[#36c85b] bg-clip-text text-transparent'>Start Now</span>
      </p>
    </div>
  )
}

export default ChatContainer