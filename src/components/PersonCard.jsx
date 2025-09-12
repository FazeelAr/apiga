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
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}>
      {/* Profile Image */}
      <div className="relative p-6 pb-4">
        <div 
          className={`w-40 h-40 mx-auto rounded-full overflow-hidden transition-all duration-300 ${
            isHovered ? 'ring-4 ring-green-500' : 'ring-0'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={imageUrl || 'https://via.placeholder.com/300x300/e5e7eb/6b7280?text=No+Image'} 
            srcSet={`${imageUrl} 400w, ${imageUrl} 800w`}
            alt={name}
            className="w-full h-full object-cover"
            loading='lazy'
          />
        </div>
      </div>

      {/* Name and Designation with Light Gray Background */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        {/* Name with LinkedIn */}
        <div className="mb-2">
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer block"
          >
            {name}
          </a>
        </div>

        {/* Designation */}
        <div className="text-base text-green-600 font-medium">
          {designation}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;