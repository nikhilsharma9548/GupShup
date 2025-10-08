import React from 'react'
import {useNavigate} from 'react-router-dom'
import assets, { userDummyData } from '../assets/assets';
import { CiSearch } from "react-icons/ci";

const Sidebar = ({selectedUser, setSelectedUser}) => {
const navigate = useNavigate();

  return (
    <div className={`bg-slate-900 h-full p-6 border-r border-slate-600 overfllow-y-scroll text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <img src={assets.logo} alt="logo" className='max-w-10' />
            <p className='text-xl'>GupShup</p>
          </div>
          <div className='py-2' onClick={() => navigate('/profile')}>
            <img src={assets.avatar_icon} alt="menu" className='xs:max-w-10 max-w-9 cursor-pointer'/>
          </div>
        </div>

        <div className='bg-slate-800 rounded-full flex items-cemter gap-3 py-2.5 px-4 mt-5'>
          <p className='text-2xl'><CiSearch/></p>
          <input type="text" 
          className='bg-transparent border-none  outline-none text-white
          text-sm  flex-1 'placeholder='Search'/>
        </div> 

      </div>  

      <div className='flex flex-col'>
          {userDummyData.map((user, index) => (
            <div key={index}onClick={() => {setSelectedUser(user)}}
             className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer text-base  max-xs:text-sm ${selectedUser?._id === user._id && "bg-slate-800"}`}>

              <img src={user?.profilePic || assets.avatar_icon} alt="" 
              className='xs:w-[56px] w-[35px]  aspect-[1/1] rounded-full'/>
              <div className='flex flex-col  leading-5'>
                <p>{user.fullName}</p>
                {
                  index  < 3 
                  ? <span className='text-green-400 xs:text-base text-xs'>Active</span>
                  : <span className='text-neutral-400 xs:text-base text-xs' >Offline</span>
                }
              </div>
              {
                index > 2 && 
                <p className='absolute top-6 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-blue-500'>{index}</p>
              }
            </div>
          ))}
      </div>
    </div>
  )
}

export default Sidebar