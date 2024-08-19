import { motion } from 'framer-motion';

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
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption to ensure your data is secure and confidential.',
    },
    {
      question: 'Can I cancel or reschedule appointments?',
      answer: 'Yes, you can cancel or reschedule appointments through your account settings.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support via email or through the contact form on our website.',
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="bg-indigo-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">Frequently Asked Questions</h2>
      <div className="container mx-auto">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-indigo-800">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
