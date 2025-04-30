import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Achievement(): JSX.Element {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Achievement 1 */}
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/python.png"
              alt="Python 3-star"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Python – 3⭐</h3>
              <p className="text-sm text-gray-600">HackerRank</p>
            </div>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/c++.png"
              alt="C++ 3-star"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">C++ – 3⭐</h3>
              <p className="text-sm text-gray-600">HackerRank</p>
            </div>
          </motion.div>

          {/* Achievement 3 */}
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/gfg.png"
              alt="GFG 80+ Questions"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Solved 80+ DSA Questions</h3>
              <p className="text-sm text-gray-600">GeeksforGeeks</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
