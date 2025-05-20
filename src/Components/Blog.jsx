import React from 'react'
import ire from '../Assets/ireland.jpg';
import syd from '../Assets/sydney.jpg';
import canada from '../Assets/canada.jpg';
import { Link } from 'react-router-dom';
function Blog() {
  return (
    <div className="bg-white py-12 px-4">
  
  <div className="text-center mb-4">
    <h1 className="text-4xl font-bold text-gray-800">LATEST BLOGS</h1>
  </div>

  <div className="text-center mb-10">
    <p className="text-lg text-gray-600">
      Stay Ahead with the Best - Read Our Latest Blogs Today
    </p>
  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="relative rounded-lg overflow-hidden group">
      <img src={syd}  alt="Australia"className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
       <p  className="text-white text-lg font-semibold mb-4">
          Master’s by Research in Australia for Nepalese Students </p>
          <Link to="/friend">
           <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
          READ MORE
        </button> </Link>
      </div>
      <p className="mt-4 text-base font-medium text-gray-800"> PR-Friendly Courses in Australia | Study in Australia</p>
    </div>
    <div className="relative rounded-lg overflow-hidden group">
      <img  src={ire} alt="New Zealand" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
        <p className="text-white text-lg font-semibold mb-4">
          Master’s by Research in New Zealand for Nepalese Students
        </p>
        <Link to="/new">
        <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
          READ MORE
        </button>
        </Link>
      </div>
      <p className="mt-4 text-base font-medium text-gray-800"> PR-Friendly Courses in New Zealand | Study in New Zealand </p>
    </div>

  
    <div className="relative rounded-lg overflow-hidden group">
      <img src={canada} alt="Canada"className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
        <p className="text-white text-lg font-semibold mb-4">
          Master’s by Research in Canada for Nepalese Students
        </p>
        <Link to="/newzealand">
        <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
          READ MORE
        </button>
        </Link>
      </div>
       <p className="mt-4 text-base font-medium text-gray-800"> PR-Friendly Courses in Canada | Study in Canada </p>
    </div>

  </div>
   
</div>

  )
}

export default Blog