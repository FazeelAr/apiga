import React, { useState } from 'react';

const PersonCard = ({ 
  name, 
  designation, 
  imageUrl, 
  linkedinUrl,
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}>
      {/* Profile Image */}
      <div className="relative mb-6">
        <div 
          className={`w-32 h-32 mx-auto rounded-full overflow-hidden transition-all duration-300 ${
            isHovered ? 'ring-4 ring-green-500' : 'ring-0'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name with LinkedIn */}
      <div className="mb-4">
        <a 
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
        >
          {name}
        </a>
      </div>

      {/* Designation */}
      <div className="text-lg text-green-600 font-medium">
        {designation}
      </div>
    </div>
  );
};


export default PersonCard;