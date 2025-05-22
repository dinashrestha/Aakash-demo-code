import React from 'react'
import { useState } from "react";
import pass from '../Assets/passport.jpg';
import ire from '../Assets/ireland.jpg';

function Obj() {
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
    
     <h2 className="text-3xl font-bold text-orange-700 mb-8">Objectives</h2>
<div className="flex flex-col md:flex-row gap-10 items-start">
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={pass}alt="passport"
      className="rounded-lg w-full md:w-96 h-96 mb-5 object-cover"
    />
  </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">OUR GOAL</h3>
          <p className="text-gray-700 text-lg leading-7 ">
            The Next with a team of enthusiastic & dedicated human resources and excellent services is determined
            to meet the requirements of students seeking to study abroad. Within 10 short years it has all set a
            record by recruiting a considerable number of Nepalese students to study abroad. Contributing to
            realizing so many dreams we think we have added a brick to the nation’s strength. We are using all the
            resources available in and outside the country to achieve the goal of providing better opportunities for
            Nepalese students. Consequently, the main thrust of The Next is to craft it as a consultancy center of an
            international standard. To achieve this end we are pushing forward with the following objectives:
          </p>
        </div>
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
  );
}



export default Obj