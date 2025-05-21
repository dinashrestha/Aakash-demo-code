import React from 'react';
import { useState } from 'react';

function Newzealand() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
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
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Contact number is required';
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
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="text-gray-700 text-lg leading-relaxed font-bold">
            What is a Master’s by Research?
          </p>
          <h2 className="mb-4 mt-8 text-gray-700">
            A Master’s by Research (MRes or MScR) is a postgraduate degree that emphasizes independent research. It offers
            students the chance to explore in-depth research in their chosen field and is an ideal option for those
            interested in pursuing a career in academia or research.
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Focused Research:</strong> Students work on a major research project.
            </li>
            <li>
              <strong>Expert Guidance:</strong> You will be mentored by experienced researchers and faculty members.
            </li>
            <li>
              <strong>Duration:</strong> The program typically lasts between 1-2 years depending on the project scope.
            </li>
          </ol>

          <h1 className="text-3xl font-bold mb-4 mt-8">Why Choose New Zealand for a Master's by Research?</h1>
          <p className="mb-4">
            New Zealand offers a unique and high-quality research education experience. Universities like the University of
            Auckland and University of Otago provide excellent opportunities for research across a range of disciplines.
          </p>
          <h2 className="text-2xl font-bold mb-2">Benefits of Studying in New Zealand</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Research Excellence: Access to advanced research facilities and expert supervision.</li>
            <li>Smaller Class Sizes: Enjoy a more personalized academic experience with smaller class sizes.</li>
            <li>Post-Graduation Work Visa: You can stay and work in New Zealand after completing your degree under the post-study work visa.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Popular Fields of Study for Nepalese Students</h2>
          <ul className="list-disc pl-5">
            <li>Environmental Science: Marine biology, conservation, and sustainability studies.</li>
          </ul>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">ACHIEVE YOUR PROGRESSIVE ACADEMIC AMBITION WITH THE AAKASH.</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input type="text"name="fullName"   placeholder="Name"  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700" value={formData.fullName} onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <input type="email" name="email" placeholder="Email"  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"  value={formData.email} onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input type="tel" name="mobile"  placeholder="Contact Number" className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700" value={formData.mobile}  onChange={handleChange}
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>
            <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
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

export default Newzealand;