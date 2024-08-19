import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import One from '../assets/images/one.jpg';
import Two from '../assets/images/two.jpg';
import Three from '../assets/images/three.jpg';
import Four from '../assets/images/four.jpg';
import Five from '../assets/images/five.jpg';
import Six from '../assets/images/six.jpg';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      text: 'This platform has transformed my life. The support and resources are amazing.',
      image: Six,
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'The professionals here are truly experts. I feel understood and supported.',
      image: One,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      text: 'I have found a sense of community here that I never thought possible.',
      image: Four,
    },
    {
      id: 4,
      name: 'Emily Davis',
      text: 'The resources and guidance provided have been invaluable to my well-being.',
      image: Two,
    },
    {
      id: 5,
      name: 'Robert Brown',
      text: 'The professional support here is top-notch. Highly recommended.',
      image: Three,
    },
    {
      id: 6,
      name: 'Sophia Williams',
      text: 'This platform has made a significant impact on my mental health journey.',
      image: Five,
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-950">What Our Users Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-up"
            data-aos-delay={testimonial.id * 100} // Adjust delay based on index
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              className="w-16 h-16 rounded-full mx-auto object-cover mb-4"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <p className="text-center text-gray-700 italic">"{testimonial.text}"</p>
            <h3 className="text-center text-indigo-800 font-bold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
