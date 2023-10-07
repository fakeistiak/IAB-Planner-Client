import { useEffect, useState } from "react";
import Navbar from "../Shared/NavBar/Navbar";

const Team = () => {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    fetch('executives.json')
      .then((res) => res.json())
      .then((data) => setExecutives(data)); 
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="px-20 bg-gray-900 ">
        <h1 className="text-5xl font-bold mb-4 text-center text-white pt-8 pb-8">Executive Team</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {executives.map((executive, index) => (
            <div key={index} className="text-center text-white transition-colors duration-300 cursor-pointer  hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent transform hover:text-white rounded-2xl p-4 shadow">
              <div className="flex flex-col items-center"> 
                <img
                  src={executive.imageSrc}

                  className="object-cover ring-4 ring-gray-300 w-60 h-60 rounded-full text"
                />
                <h2 className="text-xl font-bold mt-2">{executive.name}</h2>
                <p className=" font-semibold">{executive.role}</p>
                <ul className="mt-2">
                  <li>
                    <a
                      href={executive.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={executive.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 font-semibold hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
