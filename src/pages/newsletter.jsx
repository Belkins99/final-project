import { motion } from "framer-motion";

const NewsletterSignup = () => {
    return (
        <section className="bg-indigo-700 py-16 text-white">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Stay Updated
                </motion.h2>
                <motion.p
                    className="mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Subscribe to our newsletter to receive the latest news and updates.
                </motion.p>
                <div className="flex justify-center items-center">
                    <motion.input
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-700 px-4 py-2 rounded-md w-64"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    <motion.button
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-800 ml-4"
                        whileHover={{ scale: 1.05, backgroundColor: "#4c51bf" }}
                        transition={{ duration: 0.3 }}
                    >
                        Subscribe
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;
