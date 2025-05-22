import React from 'react'
import { Link } from 'react-router-dom';
function Banksale() {
  return (
   <div className="bg-white px-6 md:px-24 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
      Bank Balance Certificate
      </h1>
      <p className="text-lg mb-6">
       Bank balance certificate is a document issued by the bank that shows that an individual has a certain amount of money in his account. This is needed to see if the student can pay his/her fees without the aid of any jobs.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it is:</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Commonly required for various purposes, including:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>A document issued by your bank stating the current balance in your account.</li>
            <li>Required by the Australian Department of Home Affairs to demonstrate sufficient financial resources to support your studies and living expenses in Australia without relying on employment.</li>
          </ul>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Purpose:</h2>
        <p className="text-base">Assures the visa authorities that you can cover your tuition fees, living costs, and travel expenses without needing to work in Australia.</p>
      </div>

    
 <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Content:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Account holder’s name and details.</li>
        <li>Account number and type (savings, current, etc.).</li>
<li>Date of issuance.</li>
<li>Current account balance as of the issuance date.</li>
  <li>Official bank stamp and authorized signature.</li>
          
        </ul>
      </div>

    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Additional Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>The required balance will vary depending on your study duration, location, and course fees.</li>
          <li>Australia typically requires bank statements for the last 6 months to assess your financial history and ability to manage funds.</li>
          <li>While a Bank Balance Certificate provides a snapshot of your current funds, the bank statements offer a more detailed picture of your financial transactions and stability.</li>
          
        </ul>
      </div>
   <footer className="bg-gray-900 text-white w-full">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Visa Process */}
    <div>
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Visa Process</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><Link to="/study-uk" className="hover:text-orange-400 transition-colors">Student Visa in UK</Link></li>
        <li><Link to="/study-australia" className="hover:text-orange-400 transition-colors">Student Visa in Australia</Link></li>
        <li><Link to="/study-canada" className="hover:text-orange-400 transition-colors">Student Visa in Canada</Link></li>
        <li><Link to="/newzealand" className="hover:text-orange-400 transition-colors">Student Visa in New Zealand</Link></li>
      </ul>
    </div>

    {/* Scholarships */}
    <div>
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Scholarships</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><Link to="/ausscholar" className="hover:text-orange-400 transition-colors">Study in Australia Scholarships</Link></li>
        <li><Link to="/canadascholar" className="hover:text-orange-400 transition-colors">Study in Canada Scholarships</Link></li>
        <li><Link to="/newzscholar" className="hover:text-orange-400 transition-colors">Study in New Zealand Scholarships</Link></li>
        <li><Link to="/uk-scholarships" className="hover:text-orange-400 transition-colors">Study in United Kingdom Scholarships</Link></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Support</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><Link to="/header" className="hover:text-orange-400 transition-colors">Study Abroad FAQs</Link></li>
        <li><Link to="/blogs" className="hover:text-orange-400 transition-colors">Blogs</Link></li>
        <li><Link to="/testimonial" className="hover:text-orange-400 transition-colors">Testimonial</Link></li>
        <li><Link to="/" className="hover:text-orange-400 transition-colors">Universities</Link></li>
        <li><Link to="/scholarship" className="hover:text-orange-400 transition-colors">Scholarship</Link></li>
        <li><Link to="/header" className="hover:text-orange-400 transition-colors">Interview Preparation</Link></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Resources</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="/certificate" className="hover:text-blue-400 transition-colors">Relationship Certificate with Sponsor</a></li>
        <li><a href="/taxsale" className="hover:text-blue-400 transition-colors">Tax Clearance Certificate</a></li>
        <li><a href="/banksale" className="hover:text-blue-400 transition-colors">Bank Balance Certificate</a></li>
        <li><a href="/salary" className="hover:text-blue-400 transition-colors">Salary Certificate</a></li>
        <li><a href="/sop" className="hover:text-orange-400 transition-colors">Sponsorship Certificate (AOS) for Australia</a></li>
        <li><a href="/sop" className="hover:text-orange-400 transition-colors">SOP Tips</a></li>
        <li><a href="/income-certificate" className="hover:text-orange-400 transition-colors">Income Certificate</a></li>
      </ul>
    </div>
  </div>

]
  <div className="max-w-7xl mx-auto px-6 mb-12">
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

  
  <div className="border-t border-gray-700 pt-6 pb-6 px-6 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
    <div className="mb-2 md:mb-0">Privacy Policy</div>
    <div>Rights Reserved. Design & Developed by Dina</div>
  </div>
</footer>

    </div>
  )
}

export default Banksale