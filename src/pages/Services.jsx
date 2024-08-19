import React from 'react';
import { FaUserMd, FaHeadset, FaPeopleCarry } from 'react-icons/fa';
import { MdOutlinePsychology } from 'react-icons/md';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-indigo-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-950 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-indigo-200 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <FaUserMd className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Professional Counseling</h3>
            <p className="text-indigo-700">Access certified mental health professionals.</p>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-indigo-200 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <MdOutlinePsychology className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Psychological Assessments</h3>
            <p className="text-indigo-700">Comprehensive mental health evaluations.</p>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-indigo-200 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <FaHeadset className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">24/7 Support</h3>
            <p className="text-indigo-700">Always available to assist you anytime.</p>
          </motion.div>
          
          {/* Service 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-indigo-200 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <FaPeopleCarry className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Support Groups</h3>
            <p className="text-indigo-700">Join communities with similar experiences.</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
