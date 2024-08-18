const FAQ = () => {
    const faqData = [
      {
        question: 'How can I sign up?',
        answer: 'Click on the "Register" button at the top of the page and fill out the form.',
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer a variety of mental health services, including therapy and support groups.',
      },
      // Add more FAQs as needed
    ];
  
    return (
      <section className="bg-indigo-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">Frequently Asked Questions</h2>
        <div className="container mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-800">{faq.question}</h3>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQ;
  