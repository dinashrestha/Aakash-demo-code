import React from 'react'
import { useState } from "react";
import ire from '../Assets/ireland.jpg'

function Ausscholar() {

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
       Study in Australia Scholarships
      </h1>
      <p className="text-lg text-gray-700 mb-3">
        Australia is a popular destination for international students due to its high-quality education system, multicultural environment, and attractive lifestyle. However, the cost of tuition fees, accommodation, and living expenses can be a significant barrier for many students. Fortunately, there are numerous scholarships in Australia that can help you achieve your academic goals. So, we’ll explore the different types of scholarships available, their eligibility criteria, and how to apply for them.
      </p>
        <p className=" text-lg text-gray-700 mb-2 ">
         Some of the most common questions students ask during the counselling, planning to Study in Australia is, does Australia offer scholarships to International Students (Especially Nepalese Students)?
      </p>
        <p className="text-gray-700 text-lg mb-3">
     There are hundreds and thousands of Scholarships, Grants and Bursaries available for International Students. There are several Australian Government Grant, Scholarships offered by Universities and Colleges and a large number of Private Grants available to facilitate students to Study in Australia.
        </p>
 <h1 className="text-4xl md:text-4xl font-bold text-orange-700 mb-6">
       Types of Scholarships
      </h1>
      <p className='text-gray-700 text-lg mb-3'>Australia provides numerous scholarships for international students. The most popular ones are:</p>
      
      <h2 className='text-lg  font-bold'>
        <span className='text-orange-700'>Australian Government Scholarships</span>
      </h2>
      <p className='text-gray-700 text-lg mb-3 ' >The Australian government offers a range of scholarships for international students under its Australia Awards program. These scholarships cover full tuition fees, travel expenses, and an allowance for living expenses. They are available for undergraduate, postgraduate, and research students. The Australia Awards are highly competitive, and applicants are assessed based on their academic merit, leadership potential, and contribution to their community.</p>
      

        <h2 className='text-lg  font-bold'>
        <span className='text-orange-700'>University Scholarships</span>
      </h2>
      <p className='text-gray-700 text-lg mb-3 ' >Many Australian universities offer scholarships to international students. These scholarships can cover full or partial tuition fees and may also provide an allowance for living expenses. University scholarships are generally based on academic merit, but some may also consider other factors such as leadership potential or financial need.</p>
      
       <h2 className='text-lg  font-bold'>
        <span className='text-orange-700'>Private Scholarships</span>
      </h2>
      <p className='text-gray-700 text-lg mb-3 ' >Several private organizations also offer scholarships to international students. These scholarships can cover tuition fees, living expenses, or both. Some of the popular private scholarships for international students include the Endeavour Scholarship and the Fulbright Scholarship. Private scholarships may have specific eligibility criteria, such as being from a particular country or studying a particular course.</p>
      
      <h2 className='text-lg  font-bold'>
        <span className='text-orange-700'>Merit-Based Scholarships</span>
      </h2>
      <p className='text-gray-700 text-lg mb-3 '> Many of the scholarships in Australia are merit-based, which means that they are awarded to students based on their academic performance and other achievements.</p>
  <h2 className='text-3xl  font-bold'>
        <span className='text-orange-700'>Eligibility Requirements for Scholarships in Australia</span>
      </h2>
     <p className='text-gray-700 text-lg  '>The eligibility requirements for Australia scholarships vary depending on the type of scholarship and the provider. Generally, scholarships are awarded based on academic merit, financial need, or a combination of both. Some scholarships in Australia for Nepali students may also require you to have specific skills or qualifications. For example, the Australia Awards require applicants to show leadership potential and a commitment to their community.
</p>
<p className='text-gray-700 text-lg'>
*Note: Make sure to check the eligibility requirement carefully before applying</p>


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
        type="text" name="fullName" placeholder="Full Name*"  required
        value={formData.fullName} onChange={handleChange}
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

export default Ausscholar