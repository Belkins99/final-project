const NewsletterSignup = () => {
    return (
      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-4">Subscribe to our newsletter to receive the latest news and updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-700 px-4 py-2 rounded-md w-64"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-800 ml-4">
            Subscribe
          </button>
        </div>
      </section>
    );
  };
  
  export default NewsletterSignup;
  