const Testimonials = () => {
    const testimonialsData = [
      {
        id: 1,
        name: 'John Doe',
        text: 'This platform has transformed my life. The support and resources are amazing.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Jane Smith',
        text: 'The professionals here are truly experts. I feel understood and supported.',
        image: 'https://via.placeholder.com/150',
      },
      // Add more testimonials as needed
    ];
  
    return (
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-950">What Our Users Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
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
  