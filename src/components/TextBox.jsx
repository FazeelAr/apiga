import { motion } from "framer-motion";

export default function TextBox({ title, text, width = 3, points = [] }) {
  const widthMap = {
    1: "max-w-2xl",
    2: "max-w-4xl",
    3: "max-w-6xl",
    4: "max-w-8xl",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-white rounded-3xl shadow-xl p-8 my-6 mx-auto border-2 border-transparent bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 ${widthMap[width]}`}
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <h2 className="text-3xl font-bold text-[#207140] mb-4 relative">
          {title}
          <div className="w-12 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mt-2"></div>
        </h2>
        
        <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
          {text}
        </p>

        {points.length > 0 && (
          <ol className="list-decimal list-outside space-y-3 pl-6 text-gray-700">
            {points.map((p, ind) => (
              <motion.li 
                className="text-lg text-gray-700 font-medium leading-relaxed" 
                key={ind}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: ind * 0.1 }}
              >
                {p}
              </motion.li>
            ))}
          </ol>
        )}
      </div>
    </motion.div>
  );
}