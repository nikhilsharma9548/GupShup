import React, { useState } from 'react'
import assets from '../assets/assets'
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {

  const [currState, setCurrState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmited, setIsDataSubmited] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if(currState === "Sign up" && !isDataSubmited){
      setIsDataSubmited(true)
      return;
    }
  }
  
  return (
    <div className='min-h-screen w-full flex items-center
    justify-center gap-8 sm:justify-evenly max-sm:flex-col'>

     {/* -------------- left -------------- */}
     <span className='flex flex-col items-center'>
       <img src={assets.logo} className='sm:w-44 w-20' />
       <p className='sm:text-5xl text-2xl'>GupShup</p>
     </span>

       {/* -------------- right -------------- */}
      <form onSubmit={onSubmitHandler} className="border-2 sm:w-[350px] bg-slate-950 text-white border-slate-500
      p-6 flex flex-col gap-6 rounded-lg shadow-lg">

        <h2 className='font-medium text-2xl  flex justify-between items-center'>
          {currState}
          { isDataSubmited && (<p onClick={() => setIsDataSubmited(false)} ><IoIosArrowBack/></p>)}
         
        </h2>

       {currState === "Sign up" && !isDataSubmited && (<input 
       onChange={(e) => setFullName(e.target.value)}
       value={fullName}
       type="text" className='p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Full Name' required/>
      )}

      {!isDataSubmited && (
        <>
        <input onChange={(e) => setEmail(e.target.value)}
        value={email}
         type="email" placeholder='email address' required 
        className='p-2 border border-slate-500 rounded-md focus:ring-2 focus:ring-blue-500'/>

         <input onChange={(e) => setPassword(e.target.value)}
        value={password}
         type="password" placeholder='Password' required 
        className='p-2 border border-slate-500 rounded-md focus:ring-2 focus:ring-blue-500'/>
        </>
      )}

      {currState === "Sign up" && isDataSubmited && (
        <textarea onChange={(e) => setBio(e.target.value)}
        value={bio}
        rows={4}  className='p-2 border border-slate-500 rounded-md focus:ring-2
         focus:ring-blue-500' 
         placeholder='Bio'
         required></textarea>
      )}

      <button type='submit'
       className='py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md cursor-pointer'>
        {currState === "Sign up" ? "Create Account" : "Login Now"}
      </button>

      <div className='flex items-center gap-2 text-sm text-slate-400'>
        <input type="checkbox"/> 
        <p>Agree to terms of use & privacy policy.</p>
      </div>

      <div className='flex flex-col gap-2'>
        {currState === "Sign up" ? (
          <p className='text-sm text-slate-500'>Already have and account? <span className='foont-medium text-blue-500 cursor-pointer' onClick={() => {setCurrState("Login"); setIsDataSubmited(false)}}>Login here</span> </p>
        ) : (
          <p className='text-sm text-slate-500'>Create an account <span className='foont-medium text-blue-500 cursor-pointer' onClick={() => setCurrState("Sign up")}>Click here</span></p>
        ) }

      </div>
      </form>
    </div>
  )
}

export default Login