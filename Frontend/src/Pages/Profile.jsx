import React, { useState } from 'react'
import assets from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import {Mosaic} from 'react-loading-indicators'

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const navigate = useNavigate();
  const [name, setName] = useState("Nikhil Sharma")
  const [bio, setBio] = useState("Hi Everyone, I am Using GupShup")

  const handleSubmit = async(e) =>{ 
    e.preventDefault();
    navigate('/')

  }
  const [loading, setLoading] = useState(false)

  return loading ? (
    <>
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl text-slate-200
      sm:border-2 border-slate-500 flex items-center justify-center 
      max-sm:flex-col-reverse rounded-lg'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e) =>setSelectedImage(e.target.files[0]) } type="file" id="avatar" accept='.png .jpg .jpeg' hidden/>
            <img src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon} className={`w-12 h-12 ${selectedImage && "rounded-full"}`} />
            upload Profile Image
          </label>
          <input onChange={(e) =>setName(e.target.value)} 
          value={name}
          type="text" required placeholder='Your Name'  className='p-2 border border-slate-500 rounded-md focus:outline-none focus:ring-2 focus: ring-blue-500'/>

          <textarea onChange={(e) => setBio(e.target.value)}  
          value={bio}
          placeholder='Write Profile Bio' required className='p-2 border border-slate-500 rounded-md focus:outline-none focus:ring-2 focus: ring-blue-500' rows={4}></textarea>

          <button type='submit' className='bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-md text-lg cursor-pointer '>Save</button>
        </form>
        <img className='max-w-44 aspect-square  mx-10 max-sm:mt-10 ' src={assets.logo} alt="" />
      </div>
    </div></>
  ) : <div className='flex justify-center items-center h-screen '>
    <p className='text-sm'> <Mosaic color="white" size="small"/></p>
  </div>
}

export default Profile