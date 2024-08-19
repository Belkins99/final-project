import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        {
            id: 3,
            title: 'Mindfulness Meditation Retreat',
            date: 'September 20, 2024',
            link: '/events/mindfulness-meditation-retreat',
        },
        {
            id: 4,
            title: 'Stress Management Seminar',
            date: 'October 5, 2024',
            link: '/events/stress-management-seminar',
        },
        {
            id: 5,
            title: 'Coping with Anxiety: Live Q&A',
            date: 'October 15, 2024',
            link: '/events/coping-with-anxiety',
        },
        {
            id: 6,
            title: 'Depression Awareness Month Webinar',
            date: 'November 1, 2024',
            link: '/events/depression-awareness-webinar',
        },
        // Add more events as needed
    ];

    return (
        <section className="bg-indigo-50 py-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Upcoming Events</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">{event.title}</h3>
                        <p className="text-gray-600">{event.date}</p>
                        <Link
                            to={event.link}
                            className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default UpcomingEvents;
