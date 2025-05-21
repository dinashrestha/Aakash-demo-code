import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar (){


  return (
    <div>
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div>
          <a href="mailto:info@thenext.edu.np" className="mr-4">📧 info@aakashedu.np</a>
          <span>📞 +977-9852065144</span>
        </div>
        <div className="flex space-x-3 text-lg">
  <a href="#" className="hover:text-orange-400"><i className="fab fa-whatsapp"></i></a>
  <a href="#" className="hover:text-orange-400"><i className="fab fa-facebook"></i></a>
  <a href="#" className="hover:text-orange-400"><i className="fab fa-twitter"></i></a>
  <a href="#" className="hover:text-orange-400"><i className="fab fa-linkedin"></i></a>
  <a href="#" className="hover:text-orange-400"><i className="fab fa-instagram"></i></a>

</div>

        
      </div>

      
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
           <NavLink to="/"
              className="flex-shrink-0 text-xl font-bold text-blue-600 hover:text-orange-400 transition duration-300"
            > AAKASH INSTITUTE
            </NavLink>

            
            <div className="hidden md:flex space-x-6">
                <div className='relative group'>
              <a href="#" className="text-gray-700 hover:text-orange-400">Test Preparation</a>
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
           <ul className="py-2 text-sm text-gray-700">
      <li><a href="/registration" className="block px-4 py-2 hover:bg-gray-100">IELTS Preparation Classes</a></li>
      <li><a href="/registration" className="block px-4 py-2 hover:bg-gray-100">PTE preparation Classes</a></li>
      <li><a href="/registration" className="block px-4 py-2 hover:bg-gray-100">SAT Preparation Classes</a></li>
      
      </ul>
      </div>
      </div>
              
             <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-orange-600">Study abroad</a>
    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50"></div>
  <ul className="absolute hidden group-hover:block bg-white border border-gray-200 mt-1 rounded shadow-lg w-56 z-10 text-gray-700">
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in Australia</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in New Zealand</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in Canada</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in UK</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in USA</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in Ireland</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study in Denmark</a></li>
    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Why Study in Europe From Nepal?</a></li>
  </ul>
</div>

              
              
<div className="relative group">
  <a href="#" className="text-gray-700 hover:text-orange-600">Services</a>
  
 
  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
    <ul className="py-2 text-sm text-gray-700">
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Student Screening</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">University Application Assistance</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Documentation Guidance</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Interview Assistance</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Scholarship Assistance</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Student Visa Declaration Form</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">I-20/Offer Letter Confirmation</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Counseling</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pre Departure Briefing</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">VISA Lodgement</a></li>
    </ul>
  </div>
</div>

               <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-orange-600">Popular Courses</a>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
    <ul className="py-2 text-sm text-gray-700">
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Information Technology (IT) in Australia</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Agriculture in Austraila</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Documentation Guidance</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study MBA in Austraila</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Architeture in Australia</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Applied and pure Science in Austraila</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Arts in Australia</a></li>
      </ul>
      </div>
      </div>
              <a href="/blog" className="text-gray-700 hover:text-orange-600">Blogs</a>
              <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-orange-600">About Us</a>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
    <ul className="py-2 text-sm text-gray-700">
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Introduction</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Objective</a></li>
      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
      </ul>
      </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-orange-600">Contact Us</a>

           <NavLink to="/scholarship" className={({ isActive }) => `className="bg-blue-600 text-gray-400 px-6 py-1 rounded-xl hover:bg-orange-700 transition duration-300 ${
                              isActive ? 'text-blue-600' : ''
                            }`
                          }
                        >
                         Scholarship
                        </NavLink>  
  {/* <button className="bg-blue-600 text-white px-6 py-1 rounded-xl hover:bg-orange-700 transition duration-300">
    SCHOLARSHIPS
  </button> */}

              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
