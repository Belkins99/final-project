import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import resources from '../pages/ResourceDetal'; 

const BlogResources = () => {
  return (
    <section className="bg-slate-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-950">Latest Resources</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">{resource.title}</h3>
            <p className="text-slate-600">{resource.description}</p>
            <Link
              to={resource.url} // Use the resource URL as the link
              className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
            >
              Read More
            </Link>
            <p className="text-slate-500 mt-2">{resource.type}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogResources;
