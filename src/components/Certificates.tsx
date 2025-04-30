import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Certificate() {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Certificates
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Certificate 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/Cloud Computing_page-0001.jpg"
              alt="Certificate 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Cloud Computing</h3>
              <p className="text-sm text-gray-600">Issued by NPTEL</p>
            </div>
          </motion.div>

          {/* Certificate 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/Backend mooc_page-0001.jpg"
              alt="Certificate 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Server Side Scripting</h3>
              <p className="text-sm text-gray-600">Coursera</p>
            </div>
          </motion.div>


          {/* Certificate 3 */}

          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/frontend mooc_page-0001.jpg"
              alt="Certificate 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">HTML,CSS,JavaScript</h3>
              <p className="text-sm text-gray-600">Coursera</p>
            </div>
          </motion.div>


          

          {/* Certificate 4 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/dsa_page-0001.jpg"
              alt="Certificate 4"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">DSA in C++</h3>
              <p className="text-sm text-gray-600">Udemy</p>
            </div>
          </motion.div>

          {/* Certificate 5 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/BI-20240729-2942720 (1).png"
              alt="Certificate 5"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Data Structure and algorithm</h3>
              <p className="text-sm text-gray-600">Board Infinity</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
