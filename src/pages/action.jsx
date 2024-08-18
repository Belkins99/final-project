
import { Link } from "react-router-dom";


const CallToAction = () => {
    return (
      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Mental Health?</h2>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-800 inline-block"
          >
            Join Us Today
          </Link>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  