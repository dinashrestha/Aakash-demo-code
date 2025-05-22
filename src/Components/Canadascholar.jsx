import React, { useState } from 'react';
import ire from '../Assets/ireland.jpg';

function Canadascholar() {
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
        Study in Canada Scholarships
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Canada is one of the most sought destinations for higher education by students from all over the world. However, studying in Canada might cost you a lot of money.
      </p>

     <h2 className="text-3xl font-bold  mb-6">Steps to follow before applying for a visa.</h2>
         <div className="space-y-2 mb-5">
                <h3 className="text-lg font-bold ">• IDRC research awards</h3>
                <p className='mb-3 text-gray-700'> This scholarship is given by the Canadian government to students from developing countries including Nepal, India, and other countries in the Indian sub-continent. Research support of up to $15,000 is provided. Not only that but your travel fee is also covered. The applicant must be enrolled in master or doctoral programs.</p>
                
                 <h3 className="text-lg font-bold ">• Vanier Canada graduate scholarship program. </h3>
                <p className='mb-3 text-gray-700'> 
                  Vanier Canada Graduate Scholarship program is given to 166 people in a year. The applicants should possess leadership skills and research potential in their chosen area.
                 Value: $50,000 per year for three years
                </p>
                <h3 className="text-lg font-bold ">• OGS Graduate Scholarships</h3>
                <p className='mb-3 text-gray-700'> This scholarship is provided by the Canadian government in collaboration with selected institutions. The scholarship of CAD 15,000 is provided per year for international students enrolling at the selected institutions.</p>
                
                 <h3 className="text-lg font-bold ">• Quebec Provincial Government Scholarship</h3>
                <p className='mb-3 text-gray-700'>This is provided to Master’s students enrolled in the Universities located in Quebec province of Canada. The award of CAD 25,000 per year is provided to doctoral students and CAD 35,000 is provided to postdoctoral students.</p>
           
                 <h3 className="text-lg font-bold ">• Banting post-doctoral fellowship</h3>
                <p className='mb-3 text-gray-700'>To apply for this scholarship, one must be enrolled in natural and social science or health research PG programs. This scholarship is awarded to 70 fellowships in a year.
           Value: $70,000(taxable)
           Duration: 2 years</p>
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

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number*"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              name="office"
              required
              value={formData.office}
              onChange={handleChange}
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
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Preferred Study Destination*</option>
              <option value="aus">Australia</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="can">Canada</option>
            </select>

            <label className="flex items-start space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="infoConsent"
                checked={formData.infoConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                Yes, I would like to receive information on study abroad news and events from The Aakash.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Canadascholar;
