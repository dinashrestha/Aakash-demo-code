import React from 'react'
import sydd from '../Assets/sydney.jpg';
import { Link } from 'react-router-dom'

function Trusted() {
  return (
    <div
  className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
  style={{ backgroundImage: `url(${sydd})` }}
>
 
  <div className="absolute inset-0 bg-black/50"></div>

  
  <div className="relative z-10 max-w-2xl px-6">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Trusted by Over <span className="text-orange-600">6000+ Students</span>
    </h1>
    <p className="text-base md:text-lg mb-6">
      We have a fully qualified and very well educated teaching staff, continuous student counseling, and a very effective and enthusiastic student support staff.
    </p>
    <div>

      <Link to="/learn">
      <button className="bg-blue-600 hover:bg-orange-600 text-white font-semibold py-4 px-12 rounded-full transition duration-300">
        LEARN MORE
      </button>
      </Link>

    </div>
  </div>
</div>

  )
}

export default Trusted