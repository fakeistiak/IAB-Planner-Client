import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter,faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    fetch('executives.json')
      .then((res) => res.json())
      .then((data) => setExecutives(data)); 
  }, []);
  
  return (
    <>
      <div className="px-20 bg-gray-900 ">
        <h1 className="text-5xl font-bold mb-4 text-center text-white pt-8 pb-8"><span className="text-pink-500">Executive</span> Team</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {executives.map((executive, index) => (
            <div key={index} className="text-center text-white transition-colors bg-gray-500 duration-300 cursor-pointer  hover:border-transparent group hover:bg-gray-100 dark:border-gray-700 dark:hover:border-transparent transform hover:text-black rounded-2xl p-4 shadow">
              <div className="flex flex-col items-center"> 
                <img
                  src={executive.imageSrc}
                  className="object-cover ring-4 ring-gray-300 w-60 h-60 rounded-full text"
                />
                <h2 className="text-xl font-bold mt-2">{executive.name}</h2>
                <p className=" font-semibold">{executive.role}</p>
                <ul className="mt-2">
                  <li>
                    <a>
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Team;
