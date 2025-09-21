import React, { useState } from 'react';

const PersonCard = ({ 
  name, 
  designation, 
  imageUrl, 
  linkedinUrl,
  className = "",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${className}`}>
      {/* Profile Image */}
      <div className="relative p-6 pb-4">
        <div 
          className={`w-40 h-40 mx-auto rounded-full overflow-hidden transition-all duration-300 ${
            isHovered ? 'ring-4 ring-[#207140]' : 'ring-0'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={imageUrl || 'https://via.placeholder.com/300x300/e5e7eb/6b7280?text=No+Image'} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading='lazy'
          />
        </div>
      </div>

      {/* Name and Designation with Light Gray Background */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 text-center">
        {/* Name with LinkedIn */}
        <div className="mb-2">
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-800 hover:text-[#207140] transition-colors duration-300 cursor-pointer block"
          >
            {name}
          </a>
        </div>

        {/* Designation */}
        <div className="text-base text-[#95c065] font-semibold">
          {designation}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;