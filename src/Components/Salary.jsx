import React from 'react'
import { Link } from 'react-router-dom';
function Salary() {
  return (
   <div className="bg-white px-6 md:px-24 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        Salary certificate
      </h1>
      <p className="text-lg mb-6">
       Salary certificate is a document made by an authorized person of an organization that proves that a person is employed in that organization. This includes his/her salary, employment period, job responsibilities, etc.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it is:</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
           An official document issued by your employer verifying your employment status, salary, and other relevant details.
          </li>
          <li>Typically includes:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li> Employee’s name and contact information.</li>
            <li>Employer’s name and contact information.</li>
            <li>Employee’s designation and job title.</li>
            <li>
                Employment start date and current status (employed, on leave, etc.).
            </li>
            <li>Monthly or annual salary amount.</li>
            <li>Details of any benefits or allowances received.</li>
            <li>Signature and stamp of an authorized representative of the organization.</li>
          </ul>
        </ul>
      </div>
 <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Purpose for Student Visa:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Demonstrates your financial stability and ability to cover your living expenses in Australia without relying on part-time work.</li>
          <li>Strengthens your visa application by showing a consistent income source.</li>
          
        </ul>
      </div>

    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Additional Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>The format might slightly differ between organizations, but the core information remains the same.</li>
          <li>Some visa applications may require salary slips or bank statements alongside the certificate for a more comprehensive financial picture.</li>
          <li>Ensure the certificate is issued on the organization’s official letterhead and signed by a relevant authority like the HR manager or accounts department.</li>
          
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

  {/* Location Section */}
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

  {/* Bottom Footer */}
  <div className="border-t border-gray-700 pt-6 pb-6 px-6 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
    <div className="mb-2 md:mb-0">Privacy Policy</div>
    <div>Rights Reserved. Design & Developed by Dina</div>
  </div>
</footer>

    </div>
  )
}

export default Salary