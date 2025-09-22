import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ApplyNowSection = ({ 
  googleFormUrl = "#" 
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const handleApplyClick = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          {/* Horizontal line above */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
          
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Your journey to becoming an internet governance expert starts here. Apply now for Local APIGA Pakistan 2025.
            </p>
            
            {/* <p className="text-gray-600 italic">
              *Click{' '}
              <span className="text-[#95c065] hover:text-[#207140] cursor-pointer transition-colors duration-300">
                here
              </span>{' '}
              to learn more about our admission criteria and procedure.
            </p> */}
            
            <div className="pt-4">
              <motion.button
                onClick={handleApplyClick}
                className="bg-[#95c065] hover:bg-[#207140] text-white font-bold text-xl px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          
          {/* Horizontal line below */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyNowSection;