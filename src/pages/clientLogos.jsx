import { motion } from "framer-motion";
import patnerOne from '../assets/images/patner1.jpg';
import patnerTwo from '../assets/images/patner2.jpg';
import patnerThree from '../assets/images/patner3.jpg';
import patnerFour from '../assets/images/patner4.jpg';
import patnerFive from '../assets/images/patner5.jpg';

const ClientLogos = () => {
  const logos = [
    { id: 1, src: patnerOne, alt: 'Client Logo 1' },
    { id: 2, src: patnerTwo, alt: 'Client Logo 2' },
    { id: 3, src: patnerThree, alt: 'Client Logo 3' },
    { id: 4, src: patnerFour, alt: 'Client Logo 4' },
    { id: 5, src: patnerFive, alt: 'Client Logo 5' },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Our Partners</h2>
      <div className="container mx-auto flex justify-center space-x-8">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={logo.src}
              alt={logo.alt}
              className="h-20"
              whileHover={{ scale: 1.1 }} // Zoom effect on hover
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
