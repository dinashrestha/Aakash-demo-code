import React from 'react'
import { Link } from 'react-router-dom';
function Certificate() {
  return (
 <div className="bg-white px-6 md:px-24 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        Relationship Certificate with Sponsor
      </h1>
      <p className="text-lg mb-6">
        Relationship certificate with Sponsor (nata pramanit) is a document issued by the VDC or municipality,
        which is required to prove the relationship between parents and children. To issue this certificate,
        one needs to go to their VDC/municipality with his/her parents’ and siblings’ citizenship with his/her
        birth certificate.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it is:</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            A government-issued document officially verifying the relationship between individuals,
            typically parents and children.
          </li>
          <li>Commonly required for various purposes, including:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Student visa applications (e.g., Australia)</li>
            <li>Proof of family relationships for legal matters</li>
            <li>Scholarships or other applications requiring family verification</li>
          </ul>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Issuing Authority:</h2>
        <p className="text-base">VDC (Village Development Committee) or Municipality in your local area.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Documents Required:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Photocopies of citizenship cards for yourself, parents, and any siblings.</li>
          <li>Original birth certificate.</li>
          <li>Passport-sized photographs of everyone included in the certificate.</li>
          <li>Application form (usually obtained from the VDC/Municipality office).</li>
        </ul>
      </div>
 <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Procedure:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Visit your local VDC/Municipality office with the required documents.</li>
          <li>Fill out the application form and submit it along with the documents.</li>
          <li>Pay any applicable fees.</li>
          <li>The VDC/Municipality will verify the documents and issue the Relationship Certificate.</li>
        </ul>
      </div>

    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Additional Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Processing time can vary, so plan accordingly.</li>
          <li>The certificate might be issued in Nepali and English, depending on the issuing authority.</li>
          <li>Some institutions might require the Relationship Certificate to be notarized.</li>
          
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

export default Certificate