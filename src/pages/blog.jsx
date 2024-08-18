import { Link } from "react-router-dom";

const BlogResources = () => {
    const blogPosts = [
      {
        id: 1,
        title: 'Understanding Anxiety',
        excerpt: 'Learn the basics of anxiety and how to manage it.',
        link: '/blog/understanding-anxiety',
      },
      {
        id: 2,
        title: 'The Benefits of Therapy',
        excerpt: 'Discover how therapy can improve your mental health.',
        link: '/blog/benefits-of-therapy',
      },
      // Add more blog posts as needed
    ];
  
    return (
      <section className="bg-slate-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-950">Latest Resources</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">{post.title}</h3>
              <p className="text-slate-600">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BlogResources;
