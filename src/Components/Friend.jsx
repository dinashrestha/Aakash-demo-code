import React from 'react';
import { useState } from 'react';

function Friend() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    office: '',
    destination: '',
    infoConsent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!!!');
  };

  return (
    <div className="min-h-screen font-sans">
      <div className="flex flex-col md:flex-row gap-3 max-w-5xl mx-auto px-2 py-4">
        {/* Left Column: Content */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-700 leading-relaxed">
            Australia has an education system, globally recognized, for its high quality, creative approaches and its friendly atmosphere towards the non-local students. The Level 1 universities in Australia are considered to be the measure of academic success for all the ambitious Nepalese students who like to spread out their academic horizons and to achieve individual growth besides global recognition.
            <br /><br />
            This guide intends to give you the knowledge and resources which will be of essence as you make the decision of course, prepare for life at these institutions of choice.
            <br /><br />
            The average tuition fees for Tier 1 universities in Australia can range from AUD 30,000 to AUD 79,000 per year for international students. However, it's important to remember that several factors can affect the actual cost you'll pay, including:
            <ul className="list-disc list-inside mt-2">
              <li>The specific course you choose: Some fields of study, like medicine or law, typically have higher fees than others.</li>
              <li>The university you attend: Different universities within the Tier 1 category can have varying fee structures.</li>
              <li>Your citizenship: Domestic students (Australian citizens and permanent residents) generally pay lower fees than international students.</li>
            </ul>
            To get a more accurate estimate of the cost of studying at a specific Tier 1 university, it’s recommended to contact the institution directly.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Achieve your progressive academic ambitions with Aakash.
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input  type="text" name="name"  placeholder="Name"  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700" value={formData.name} onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>
            <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
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
              'New Baneshwor Office (Head Office)',
              'Putalisadak Office',
              'Bhairahawa Office',
              'Birtamode Office',
              'Pokhara Office',
              'Parsa Office',
              'Nepalgunj Office',
              'Butwal Office',
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
  );
}

export default Friend;