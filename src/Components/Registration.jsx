import React from 'react'
import girll from'../Assets/girl.jpg';
import { useState } from "react";
import { Link } from 'react-router-dom';


function Registration() {
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
    <div className="py-10 px-4 bg-white">
  <div className="text-center mb-4">
    <h1 className="text-3xl font-bold text-gray-800">GET IN TOUCH</h1>
  </div>

  <div className="text-center mb-10">
    <p className="text-gray-600">We value your inquiries, send us a message and we'll get back to you</p>
  </div>

  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
    
    <div className="w-full lg:w-1/2">
     <img src={girll} alt="Study in Canada" className="w-full h-auto object-cover rounded-lg shadow-md" />

    </div>

    
     <div className="w-full lg:w-1/2 h-auto bg-gray-50 p-8 rounded-lg shadow-lg">
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
        <input  type="email"  name="email" placeholder="Email Address*" requiredvalue={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input type="tel" name="mobile"   placeholder="Mobile Number*"    required value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

        <select name="office" required   value={formData.office}  onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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

        <select name="destination" required  value={formData.destination} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Preferred Study Destination*</option>
          <option value="aus">Australia</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="can">Canada</option>
        </select>

        <label className="flex items-start space-x-2 text-sm text-gray-600">
          <input type="checkbox" name="infoConsent"  checked={formData.infoConsent} onChange={handleChange} className="mt-1"  />
          <span>Yes, I would like to receive information on study abroad news and events from The Aakash.</span>
        </label>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200" >
          Submit
        </button>
       
      </form>
    </div>
  </div>
</div>

  )
}

export default Registration