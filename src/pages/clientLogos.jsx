import { Link } from "react-router-dom";
import patnerOne from '../assets/images/patner1.jpg'
import patnerTwo from '../assets/images/patner2.jpg'
import patnerThree from '../assets/images/patner3.jpg'
import patnerFour from '../assets/images/patner4.jpg'
import patnerFive from '../assets/images/patner5.jpg'
const ClientLogos = () => {
    const logos = [
      { id: 1, src: patnerOne, alt: 'Client Logo 1' },
      { id: 2, src: patnerTwo, alt: 'Client Logo 2' },
      { id: 3, src: patnerThree, alt: 'Client Logo 2' },
      { id: 4, src: patnerFour, alt: 'Client Logo 2' },
      { id: 5, src: patnerFive, alt: 'Client Logo 2' },
      
    ];
  
    return (
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Our Partners</h2>
        <div className="container mx-auto flex justify-center space-x-8">
          {logos.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} className="h-20" />
          ))}
        </div>
      </section>
    );
  };
  
  export default ClientLogos;
  