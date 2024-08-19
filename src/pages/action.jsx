import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-indigo-700 py-16 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Improve Your Mental Health?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-800 inline-block"
          >
            Join Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
