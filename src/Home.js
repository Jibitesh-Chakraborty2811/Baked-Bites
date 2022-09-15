import React from 'react'
import Background from "./Backgroundimg.jpg";
import Back2 from "./2ndbackground.jpg";
import Item from './Item'
import Login from './Login'
function Home() {
  return (
    <div>
      <div className="relative top-7">
        <h1 className="text-3xl md:text-6xl text-white font-bold relative top-20 md:top-20 text-center">Welcome To Baked Bites!</h1>
        <img src={Background} alt="error" className="w-screen md:w-full overflow-hidden h-80" />
      </div>
      <div className="relative -top-3">
        <h2 className="text-2xl md:text-4xl font-bold relative top-20 font-mono px-2">Baked with love for you!</h2>
        <img src={Back2} alt="error" className="w-full overflow-hidden h-80" />
      </div>
     
    </div>
  )
}

export default Home;
