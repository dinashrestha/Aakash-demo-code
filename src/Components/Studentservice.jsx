import React from 'react'

function Studentservice() {
  return (
   <div className="student-services px-6 py-12 bg-gray-50">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">
        <span className="text-orange-600">STUDENT</span> SERVICES</h1>
  </div>

  <div className="text-center mb-12 max-w-2xl mx-auto">
    <p className="text-lg text-gray-600">
      Take Advantage of Our Top-Notch Student Services from Highly Qualified Education Counselors and Visa Expert Teams
    </p>
  </div>

  <section className="services-section grid gap-8 md:grid-cols-3 lg:grid-cols-3">
    <div className="service-card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">Student Screening</h3>
      <p className="text-gray-600">
        The “student assistance team” of Next Consultancy is an experienced agency in background checks of students' eligibility for enrollment.
      </p>
    </div>
 
    <div className="service-card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">University Application Assistance</h3>
      <p className="text-gray-600">
        An application assistance team is available to help you complete the university admission process.
      </p>
    </div>

    <div className="service-card p-6  text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">Documentation Guidance</h3>
      <p className="text-gray-600">
        The Next’s Document Department helps students prepare their own documents and comply with court procedural requirements.
      </p>
    </div>

    <div className="service-card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">Interview Assistance</h3>
      <p className="text-gray-600">
        Many institutions will ask students to meet online before accepting their application. We assist with this process.
      </p>
    </div>

    <div className="service-card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">Scholarship Assistance</h3>
      <p className="text-gray-600">
        The Scholarship Assistance Program informs students about applying for private/outside scholarships.
      </p>
    </div>

    <div className="service-card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">Student Visa Declaration Form</h3>
      <p className="text-gray-600">
        To serve Australian Universities and Colleges better, The Next has formed its own Compliance Department.
      </p>
    </div>
  </section>
</div>

  )
}

export default Studentservice