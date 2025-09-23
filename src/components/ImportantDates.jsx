import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const ImportantDatesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dateItems = [
    {
      icon: Calendar,
      label: "Online application opens:",
      date: "24 September, 2025",
      color: "text-[#95c065]"
    },
    {
      icon: Clock,
      label: "Application deadline:",
      date: "20 October, 2025",
      color: "text-[#207140]"
    },
    {
      icon: Award,
      label: "Result announcement:",
      date: "3rd November, 2025",
      color: "text-[#95c065]"
    },
    {
      icon: Users,
      label: "Program dates:",
      date: "17-18 November, 2025",
      color: "text-[#207140]"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          {...fadeInUp}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#95c065] mb-4">
              Important Dates
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#95c065] to-[#207140]"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Main Dates */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {dateItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 py-2">
                  <item.icon className={`w-5 h-5 mt-1 ${item.color}`} />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-gray-800 font-semibold ml-2">{item.date}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;