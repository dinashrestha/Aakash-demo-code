import React from 'react'

function Testimonial() {
  return (
    <div className="bg-gray-50 py-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    

    {[
      {
        name: "Naren Raya",
        stars: "★★★★",
        text: "My experience with this consultancy has opened the door to my higher studies in Australia. The counselor’s kindness and consistent follow-ups on documentation and interview preparation have been exceptional. I highly recommend this consultancy to any student uncertain about choosing the best support for their studies abroad."
      },
      {
        name: "Dhurba Shrestha",
        stars: "★★★★★",
        text: "One of the Best consultancy in the Town..They evaluate your case minutely and support you accordingly..I am extremely satisfied by their service ..They always met my expectations and Helped me and My counselor Neela Madam, she advised me some really great option for my masters which matched my preferences , I personally Thank her for all her support throughout my process to study in Australia."
      },
      {
        name: "Keshav Bijukchhe",
        stars: "★★★★★",
        text: "The Next Education Consultancy is the best consultancy I have ever seen.All the staffs here are really helpful and provide actual information for desired student whoever want to persue their career in abroad.I am able to get visa for Australia because of their proper guidelines.I recommend The next for those student who want to make future step in abroad for their higher level studies."
      },
      {
        name: "Chandra Singh Suryabanshi",
        stars: "★★★★★",
        text: "I wish everyone to visit the next education consultancy which is one of the best consultancy among all from my side.Hope you guys also like this consultancy so you must visit once."
      },
      {
        name: "Ram Babu Sah",
        stars: "★★★★★",
        text: "I have visited different consultancies but i was satisfied with the next education consultancy, their way of counselling the way they treat students impressed me to apply from them."
      },
      {
        name: "Saroj Bhattarai",
        stars: "★★★★",
        text: "I have been using it since 2 years. It has helped me in many ways to keep my business account clear and updated. I highly recommend this consultancy to any student uncertain about choosing the best support for their studies abroad."
      }
    ].map((testimonial, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
        <div className="text-yellow-500 text-lg mb-2">{testimonial.stars}</div>
        <p className="text-gray-700 mb-4">{testimonial.text}</p>
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        </div>
      </div>
    ))}

  </div>
</div>

  )
}

export default Testimonial