import React, { useRef, useState } from 'react'
import Login from './components/Login';
import Signup from './components/signup';

const Auth = () => {
  const [login, setLogin] = useState(true);
  const elRef = useRef(null)

  function handleShift(){
    setLogin(prev => {
      if(login) elRef.current.style.transform = "translateX(0%)"
      elRef.current.style.width = "100%"
      setTimeout(() => {
        if(!login) elRef.current.style.transform = "translateX(100%)"
        
        elRef.current.style.width = "24rem"
      }, 500)
      return !prev
    })

    
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900" 
    style={{
      backgroundImage:"url('/src/assets/bg-pattern.jpg')",
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }}
    >
      <div className="bg-gray-500 rounded-2xl shadow-2xl w-auto h-auto overflow-hidden relative">
        <div className='flex flex-row h-auto'>
          <Login className={`flex-1 duration-700 ${login ? "block" : "hidden md:block md:opacity-0"}`} handleClick={handleShift} /> 
          <Signup className={`flex-1 duration-700 ${login ? "hidden md:block md:opacity-0" : "block"}`} handleClick={handleShift} />
        </div>

        <div ref={elRef} className={`hidden md:block w-[24rem] absolute h-full top-0 overflow-hidden ${login ? "rounded-l-[125px]" : "rounded-r-[125px]"} duration-500`} style={{transform: "translateX(100%)"}}>
          <div className={`flex bg-gradient-to-r from-blue-600 to-green-400 flex-col justify-center items-center text-white p-6 h-full w-full absolute`}>
            <h1 className="text-3xl font-bold">{login ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p className="text-center text-md mt-2 w-70">{login ? "Enter your personal details to use all of site features." : "Register with your personal details to use all site features."}</p>
            <button
              className="mt-5 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-500 cursor-pointer transition"
              onClick={handleShift}
            >
              {login ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Auth
