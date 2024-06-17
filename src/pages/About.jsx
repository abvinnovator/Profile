import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8 md:my-12">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-4 md:mx-12">
        <div className="mb-8">
          <p className="mb-4"><span className="font-semibold">NAME:</span>A.BRAHMA VAMSI</p>
          <p className="mb-4"><span className="font-semibold">LOCATION:</span> ANDHRA PRADESH,INDIA📍</p>
          <p className="mb-4"><span className="font-semibold">DEGREE:</span>Btech(CSE)</p>
  
          <p className="mb-4"><span className="font-semibold">EMAIL:</span> <a href="mailto:brahmavamsi1234@gmail.com" className="text-blue-600">brahmavamsi1234@gmail.com</a></p>
        </div>
        <div className="mb-8">
          <p className="mb-4"><span className="font-semibold">AGE:</span> 19 years</p>
          <p className="mb-4"><span className="font-semibold">CAREER LEVEL:</span> beginner-level</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-12">
      <a
          href="https://drive.google.com/uc?export=download&id=1CFWYAcJV5jebXrOTVf6tw31KaSu__hFo"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default About;
