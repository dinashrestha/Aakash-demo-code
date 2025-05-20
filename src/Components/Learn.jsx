import React from 'react'
import image from '../Assets/hand.jpg';
import imgg from '../Assets/canada.jpg';

function Learn() {
  return (
    <div className='w-full max-w-4xl mx-auto md:pl-0 '> 
  <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white mt-7"
    style={{ backgroundImage: `url(${image})` }}></div>
  <h1 className='text-orange-600 text-5xl mt-auto text-center'>Introduction</h1>

  <div className="flex flex-col md:flex-row items-start gap-6">
      
      <div className="w-full md:w-1/2 mx-auto">
      <img src={imgg} alt="Team Photo" className="w-full h-64 object-cover rounded-lg mt-16" />
    </div>
      
   <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 mt-8">
          <span className="text-orange-600 ">WHO WE ARE ?</span>
        </h2>
        <p className="text-gray-700 text-lg">
          The Aakash Education Consultancy has a long standing reputation of being one of the most comprehensive study abroad consultants in Nepal. Our Corporate office is at Dillibazar, Kathmandu, Nepal. We have a support office in Sydney, Australia and branches at Dillibazar, Kathmandu, Narayanghat, Pokhara, Nawalparasi, Parsa, Bhairahawa, Biratnagar, Damak, Butwal in Nepal.
        </p>
      </div>
</div>
    
  <div className="w-full flex flex-col md:flex-row md:space-x-6">
 
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl font-bold mb-4 mt-8">
      <span className="text-orange-600">OUR MISSION</span>
    </h2>
    <p className="text-gray-700 text-lg">
      Our organization has single minded focus; to guide students to the best possible institutions to enable them to build their future. Using our expertise and vast experience, we can identify the most suitable institutions for each student. Our excellent network with the Australian Institutions helps us to deliver the best services to our students.
      Measuring the contentment of many students and their guardians, we are now showered with their unconditional love proving the bricks to success. This has triggered the expansion of our facilities for the students of all levels and faculties. The Next with its incessant services to students, willing to carry on higher study abroad, has created own border in study abroad consultation as the most reliable source. We are proud to announce that students in various faculties and institutions abroad have found our services better than the best.
    </p>
  </div>
 
  <div className="w-full md:w-1/2 mt-20">
    <img src={imgg} alt="Team Photo" className="w-full h-64 object-cover rounded-lg" />
  </div>
  
</div>

</div>


  )
}

export default Learn