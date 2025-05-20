import React from 'react'
import { useState } from 'react';


function New() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    office: "",
    destination: "",
    infoConsent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Contact number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!!!");
  };
  return (
    <div className="bg-gray-100 font-sans">
    
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
       
        <div class="md:w-2/3">
            <p class="text-gray-700 text-lg leading-relaxed">
                Many international students aim to secure Permanent Residency (PR) in Australia upon completing their <span className='text-orange-600'>studies in Australia.</span> While no course guarantees PR, selecting a program aligned with in-demand occupations can significantly improve your prospects. This guide explores fields with strong employment opportunities and relevant courses in Australia. It is important to note that PR is a complex process with various requirements, including skills assessments, English proficiency, and meeting points test thresholds. For the most accurate information, always refer to the <span className='text-orange-600'>Department of Home Affairs website.</span>
            </p>
            <h2 class="text-xl font-bold mb-4 mt-8">KEY CONSIDERATIONS</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Skilled Occupation Lists:</strong> Ensure your chosen field is listed on the Skilled Occupation List (SOL), Combined Skilled Occupation List (CSOL), or relevant State Nominated Occupation Lists (SNOLs). These lists are updated regularly.</li>
                <li><strong>Points Test:</strong>  Most skilled visas operate on a points-based system. Factors like age, English proficiency, qualifications, and work experience contribute to your score.</li>
                <li><strong>State Nomination: </strong> Some states and territories nominate skilled workers to fill shortages, increasing your chances of receiving a visa invitation.</li>
                <li><strong>Regional Opportunities: </strong> Studying and working in regional areas can provide additional points for PR and access to regional visas.</li>
            </ol>
        </div>
        
        <div class="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">ACHIEVE YOUR PROGRESSIVE ACADEMIC AMBITION WITH THENEXT.</h2>
            
           <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input type="text" name="fullName" placeholder="Name"  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"  value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>
      <div>
        <input type="email" name="email"  placeholder="Email" className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"  value={formData.email}  onChange={handleChange}
        />  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input  type="tel"  name="mobile"  placeholder="Contact Number"  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"  value={formData.mobile} onChange={handleChange}
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
      </div>
      <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
      >
        Submit
      </button>
    </form>
        </div>
    </div>
    <footer className="bg-gray-900 text-white py-12 px-4">
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
</div>
  )
}

export default New