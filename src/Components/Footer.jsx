import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
   
   <div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Visa Process</h2>
  <ul className="space-y-2 text-gray-300 text-sm">
  <li>
    <Link to="/study-uk" className="hover:text-orange-400 cursor-pointer transition-colors"
    > Student Visa in UK
    </Link>
  </li>
  <li>
    <Link to="/study-australia" className="hover:text-orange-400 cursor-pointer transition-colors" >
      Student Visa in Australia
    </Link>
  </li>
  <li>
    <Link to="/study-canada" className="hover:text-orange-400 cursor-pointer transition-colors"
    >
      Student Visa in Canada
    </Link>
  </li>
  <li>
    <Link to="/newzealand" className="hover:text-orange-400 cursor-pointer transition-colors"
    >
      Student Visa in New Zealand
    </Link>
  </li>
</ul>
</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Scholarships</h2>
  <ul className="space-y-2 text-gray-300 text-sm">

    <li >
     < Link to= "/ausscholar "className="hover:text-orange-400 cursor-pointer transition-colors">Study in Australia Scholarships
     </Link>
     </li>
    <li>
      <Link to="/canadascholar" className="hover:text-orange-400 cursor-pointer transition-colors">
        Study in Canada Scholarships
      </Link>
    </li>
    <li>
      <Link to="/newzscholar" className="hover:text-orange-400 cursor-pointer transition-colors">
        Study in New Zealand Scholarships
      </Link>
    </li>
    <li>
     <Link to="/uk-scholarships" className="hover:text-orange-400 cursor-pointer transition-colors">
        Study in United Kingdom Scholarships
      </Link></li>
  </ul>
</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Support</h2>


<ul className="space-y-2 text-gray-300 text-sm">
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/header">Study Abroad FAQs</Link>
  </li>
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/blogs">Blogs</Link> 
  </li>
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/testimonial">Testimonial</Link>
  </li>
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/">Universities</Link>
  </li>
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/scholarship">Scholarship</Link>
  </li>
  <li className="hover:text-orange-400 cursor-pointer transition-colors">
    <Link to="/header">Interview Preparation</Link>
  </li>
</ul>

</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Resources</h2>
 <ul className="space-y-2 text-gray-300 text-sm">
  <li>
    <a href="/certificate" className="hover:text-blue-600 cursor-pointer transition-colors">
      Relationship Certificate with Sponsor
    </a>
  </li>
  <li>
    <a href="/taxsale" className="hover:text-blue-600 cursor-pointer transition-colors">
      Tax Clearance Certificate
    </a>
  </li>
  <li>
    <a href="/banksale" className="hover:text-blue-600 cursor-pointer transition-colors">
      Bank Balance Certificate
    </a>
  </li>
  <li>
    <a href="/salary" className="hover:text-blue-600 cursor-pointer transition-colors">
      Salary Certificate
    </a>
  </li>
  <li>
    <a href="/sop" className="hover:text-orange-600 cursor-pointer transition-colors">
      Sponsorship Certificate (AOS) for Australia
    </a>
  </li>
  <li>
    <a href="/sop" className="hover:text-orange-600 cursor-pointer transition-colors">
      SOP Tips
    </a>
  </li>
  <li>
    <a href="/income-certificate" className="hover:text-orange-600 cursor-pointer transition-colors">
      Income Certificate
    </a>
  </li>
</ul>

</div>
</div>

 
  <div className="max-w-7xl mx-auto mb-12">
    <h2 className="text-xl font-semibold mb-4 text-orange-600">Location Details</h2>
    <div className="flex flex-wrap gap-3">
      {[
        "New Baneshwor Office (Head Office)",
        "Putalisadak Office",
        "Bhairahawa Office",
        "Birtamode Office",
        "Pokhara Office",
        "Parsa Office",
        "Nepalgunj Office",
        "Butwal Office"
      ].map((location, index) => (
        <button
          key={index}
          className="bg-gray-800 text-sm text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          {location}
        </button>
      ))}
    </div>
  </div>

 
  <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
    <div className="mb-2 md:mb-0">Privacy Policy</div>
    <div>Rights Reserved. Design & Developed by Dina</div>
  </div>
</footer>

  )
}

export default Footer