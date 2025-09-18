import React from "react";
import { motion } from "framer-motion";

const ObjectiveCard = ({
  title,
  description,
  variant = "green",
  index = 0,
}) => {
  const variants = {
    green: "bg-[#207140]",
    parrot: "bg-[#95c065]",
  };

  const textColors = {
    green: "text-white",
    parrot: "text-black",
  };

  const titleColors = {
    green: "text-white",
    parrot: "text-gray-900",
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const hoverVariants = {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className={`
        ${variants[variant]} 
        rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300
        h-full flex flex-col justify-between min-h-[280px]
      `}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverVariants}
    >
      <div>
        <motion.h3
          className={`text-2xl font-bold mb-6 leading-tight ${titleColors[variant]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className={`text-lg leading-relaxed ${textColors[variant]} opacity-90`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ObjectivesSection = ({ title, objectives }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
            {title}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={index}
              title={objective.title}
              description={objective.description}
              variant={objective.variant}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
