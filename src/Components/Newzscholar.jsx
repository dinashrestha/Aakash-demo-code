import React from 'react'
import { useState } from "react";
import ire from '../Assets/ireland.jpg';

function Newzscholar() {
    const [formData, setFormData] = useState({
            fullName: "",
            email: "",
            mobile: "",
            office: "",
            destination: "",
            infoConsent: false,
          });
        
          const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: type === "checkbox" ? checked : value,
            }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            
            console.log("Submitted Data:", formData);
            alert("Form submitted successfully!!!");
          };
  return (
    <div className="bg-white px-6 md:px-24 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
        Study in New Zealand Scholarships
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        ThGetting a scholarship is competitive in New Zealand. Below are the three of the most popular scholarships given by the New Zealand government to international students wanting to study in New Zealand.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
         New Zealand International Doctoral Research Scholarships
        </h2>
        <p className="text-gray-700 text-base">
         This scholarship is for the international students who wish to pursue PhD in New Zealand. The recipients get their tuition fee covered. Also, they get tax-free $25,000 NZ allowance per year for three years. Medical insurance of $600 NZ is also awarded. To get this award, you must have a GPA of 3.7 in your postgraduate studies and must have initiated your PhD studies at a New Zealand University. This award is not given to Australians or citizens from New Zealand. About 8 of these awards are given on an annual basis.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
         New Zealand Development Scholarships
        </h2>
        <p className="text-gray-700 text-base">
          This scholarship is managed by the New Zealand Ministry of Foreign Affairs and Trade and is funded by the New Zealand Aid Program and it. Any international student wanting to pursue postgraduate study in New Zealand can apply for this scholarship.
        </p>

         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        New Zealand Scholarships for international tertiary students
        </h2>
        <p className="text-gray-700 text-base">
          This Scholarship is provided to a handful of countries from Asia and some other countries in other continent. It is provided to a student who is intending to study Postgraduate Certificate, Postgraduate Diploma, Master’s Degree or PhD.
        </p>
      </div>

<div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-xl bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img src={ire} alt="ireland" className="rounded-xl w-full h-auto mb-5" />
          </div>
<div className="mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700">Register with The Aakash</h2>
    </div>

    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name*"
        required
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input type="email" name="email"placeholder="Email Address*" required value={formData.email}onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input type="tel" name="mobile" placeholder="Mobile Number*"requiredvalue={formData.mobile} onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select name="office" required value={formData.office} onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Nearest Office*</option>
        <option value="ktm">Kathmandu</option>
        <option value="pkh">Pokhara</option>
        <option value="btl">Butwal</option>
        <option value="brm">Birtamode</option>
        <option value="syd">Sydney</option>
        <option value="slk">Srilanka</option>
        <option value="dmk">Damak</option>
        <option value="brn">Biratnagar</option>
      </select>

      <select
        name="destination" required value={formData.destination}  onChange={handleChange}  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Preferred Study Destination*</option>
        <option value="aus">Australia</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="can">Canada</option>
      </select>

      <label className="flex items-start space-x-2 text-sm text-gray-600">
        <input  type="checkbox"   name="infoConsent"  checked={formData.infoConsent}  onChange={handleChange} className="mt-1"
        />
        <span>
          Yes, I would like to receive information on study abroad news and events from The Aakash.
        </span>
      </label>

      <button
        type="submit"  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
      >
        Submit
      </button>
    </form>
    </div>
    </div>
  </div>

  )
}

export default Newzscholar