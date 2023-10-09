import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos"
import 'aos/dist/aos.css';
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Function to truncate the description to 50 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    } else {
      return description;
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-5xl dark:text-white py-8">
          Our <span className="text-pink-500">Services</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2" data-aos="fade-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  {service.name}
                </h2>
                <p className="mt-2 text-lg tracking-wider pb-4 text-blue-500 uppercase dark:text-blue-400">
                  {truncateDescription(service.description)}
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  Price: {service.price}
                </p>
                <Link to={`/details/${service.id}`} className="btn btn-secondary text-white">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
