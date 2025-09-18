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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-2xl shadow-lg p-6 my-3 mx-auto border border-green-200 ${widthMap[width]}`}
    >
      <h2 className=" text-2xl font-bold text-[#207140] mb-2">{title}</h2>
      <p className="text-black font-medium mb-4">
        {text}
      </p>

      <ol className="list-decimal list-outside space-y-2 pl-6 text-gray-700">
        {points.map((p, ind) => (
          <li className="text-black font-medium" key={ind}>
            {p}
          </li>
        ))}
      </ol>

    </motion.div>
  );
}
