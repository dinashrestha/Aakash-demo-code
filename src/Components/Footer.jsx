import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
   
   <div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Visa Process</h2>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Student Visa in UK</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Student Visa in Australia</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Student Visa in Canada</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Student Visa in New Zealand</li>
  </ul>
</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Scholarships</h2>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Study in Australia Scholarships</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Study in Canada Scholarships</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Study in New Zealand Scholarships</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Study in United Kingdom Scholarships</li>
  </ul>
</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Support</h2>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Study Abroad FAQs</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Blogs</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Testimonial</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Universities</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Scholarship</li>
    <li className="hover:text-orange-400 cursor-pointer transition-colors">Interview Preparation</li>
  </ul>
</div>

<div>
  <h2 className="text-xl font-semibold mb-4 text-orange-600">Resources</h2>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="hover:text-blue-600 cursor-pointer transition-colors">Relationship Certificate with Sponsor</li>
    <li className="hover:text-blue-600 cursor-pointer transition-colors">Tax Clearance Certificate</li>
    <li className="hover:text-blue-600 cursor-pointer transition-colors">Bank Balance Certificate</li>
    <li className="hover:text-blue-600 cursor-pointer transition-colors">Salary Certificate</li>
    <li className="hover:text-orange-600 cursor-pointer transition-colors">Sponsorship Certificate (AOS) for Australia</li>
    <li className="hover:text-orange-600 cursor-pointer transition-colors">SOP Tips</li>
    <li className="hover:text-orange-600 cursor-pointer transition-colors">Income Certificate</li>
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