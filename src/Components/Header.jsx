// 
 import React from 'react';
import visa from '../Assets/visa.png';
import hi from '../Assets/hi.png';
import expert from '../Assets/expe.png';
import team from '../Assets/team.png';
import canada from '../Assets/canada.jpg';
import ireland from '../Assets/ireland.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-white text-center px-4 py-16">
      {/* Welcome Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to The Aakash Institute</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">The Leading Education Consultancy in Nepal</h2>
        <p className="text-gray-600 leading-relaxed text-base">
          The Aakash Consultancy has a long-standing reputation for being one of the best educational consultancies in Nepal for studying abroad. Our head office is located at New Baneshwor, Kathmandu, with branches in Putalisadak, Bhairahawa, Birtamode, Parsa, Pokhara, Nawalparasi, Nepalgunj, Butwal, Damak, Narayangarh, Biratnagar, Tandi, and Damauli in Nepal. We also have support offices in Sydney and Sri Lanka.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={visa} alt="Visa Success" className="w-20 h-20 mb-2" />
          <p className="text-lg font-medium text-gray-700">High Visa Success Rate</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={expert} alt="20 Years of Success" className="w-20 h-20 mb-2" />
          <p className="text-lg font-medium text-gray-700">20<sup>th</sup> Year of Success</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={hi} alt="Career Counselors" className="w-20 h-20 mb-2" />
          <p className="text-lg font-medium text-gray-700">Certified Career Counselors</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={team} alt="Visa Expert Team" className="w-20 h-20 mb-2" />
          <p className="text-lg font-medium text-gray-700">Visa Expert Team</p>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Top Study Destinations Around the World</h1>
          <p className="text-lg text-gray-600">
            Discover which Top Destinations are PERFECT for You to Actually Make Your Dreams a Reality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Australia Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <img src={canada} alt="Study in Australia" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Study in Australia</h3>
              <NavLink
                to="/study-australia"
                className={({ isActive }) =>
                  `mt-2 block px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded ${
                    isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>

          {/* Ireland Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <img src={ireland} alt="Study in Ireland" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Study in Ireland</h3>
              <NavLink
                to="/study-ireland"
                className={({ isActive }) =>
                  `mt-2 block px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded ${
                    isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>

          {/* Canada Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <img src={canada} alt="Study in Canada" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Study in Canada</h3>
              <NavLink
                to="/study-canada"
                className={({ isActive }) =>
                  `mt-2 block px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded ${
                    isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <img src={ireland} alt="Study in Ireland" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Study in Ireland</h3>
              <NavLink
                to="/study-ireland"
                className={({ isActive }) =>
                  `mt-2 block px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded ${
                    isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <img src={ireland} alt="Study in Ireland" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Study in Ireland</h3>
              <NavLink
                to="/study-ireland"
                className={({ isActive }) =>
                  `mt-2 block px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded ${
                    isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;