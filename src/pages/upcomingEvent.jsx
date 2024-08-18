import { Link } from "react-router-dom";

const UpcomingEvents = () => {
    const events = [
      {
        id: 1,
        title: 'Mental Health Workshop',
        date: 'August 25, 2024',
        link: '/events/mental-health-workshop',
      },
      {
        id: 2,
        title: 'Online Therapy Session',
        date: 'September 10, 2024',
        link: '/events/online-therapy-session',
      },
      // Add more events as needed
    ];
  
    return (
      <section className="bg-indigo-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Upcoming Events</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <Link
                to={event.link}
                className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default UpcomingEvents;
  