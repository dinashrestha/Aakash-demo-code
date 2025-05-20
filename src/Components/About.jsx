import React from 'react'
import ireland from '../Assets/ireland.jpg';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div
  className="hero-section relative bg-cover bg-center h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${ireland})` }}
>
  
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
      About <span className="text-orange-600">Canada</span>
    </h1>

  
    <div className="button-group  flex flex-wrap justify-center gap-10">
      {/* <button className="bg-orange-600 text-white px-12 py-3 rounded-xl hover:bg-blue-600 transition duration-300">
        EXPLORE
      </button> */}
      {/* <div className="button-group flex flex-wrap justify-center gap-10"> */}
          <Link to="/study-canada">
        <button className="bg-orange-600 text-white px-12 py-3 rounded-xl hover:bg-blue-600 transition duration-300">
          EXPLORE
        </button>
      </Link>
   
      
      <button className="bg-blue-600 text-white px-12 py-3 rounded-xl hover:bg-orange-700 transition duration-300">
        VISA PROCESS
      </button>
      <button className="bg-blue-600 text-white px-12 py-3 rounded-xl hover:bg-orange-700 transition duration-300">
        SCHOLARSHIPS
      </button>
      <button className="bg-blue-600 text-white px-12 py-3 rounded-xl hover:bg-orange-700 transition duration-300">
        RELATED BLOGS
      </button>
    </div>
  </div>
  
 </div>

  )
}

export default About