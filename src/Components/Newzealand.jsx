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
    </div>
  );
}

export default Newzealand;