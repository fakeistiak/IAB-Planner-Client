import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Reviews = () => {


useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (
        <>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                            What our <span className="text-pink-500">clients</span> say
                        </h1>

                        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni
                            quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                        </p>

                        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 border rounded-lg dark:border-gray-700" data-aos="fade-down">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    “The sweet sixteen celebration curated by IAB planner was nothing short of enchanting. Their meticulous attention to detail and boundless creativity transformed our vision into a captivating reality. The party resonated with energy, leaving the kids in sheer delight. What stood out the most was the stress-free experience they provided. Our daughter's milestone was marked by pure joy, and it was all possible due to the exceptional team at ”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img
                                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                                        src="https://i.ibb.co/44P6Ws2/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
                                        alt=""
                                    />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">Sara Grey</h1>
                                        <span className="text-sm text-gray-500">CTO, Robert Consultancy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border rounded-lg dark:border-gray-700" data-aos="fade-down">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    “Our daughter's sweet sixteen, organized by IAB Planner, was a dream come true. They brought our vision to life with impeccable attention to detail and creativity. The party was a hit, and the kids had a blast. It was a stress-free and joyful celebration, all thanks to the exceptional team at IAB Planner. flawlessly organized by IAB Planner, transformed our vision into reality, creating cherished memories for all thats all i wanna say thanks to the organization”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img
                                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                                        src="https://i.ibb.co/VtMJjf5/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash.jpg"
                                        alt=""
                                    />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson</h1>
                                        <span className="text-sm text-gray-500">CEO, Jeny Consultancy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border rounded-lg dark:border-gray-700" data-aos="fade-down">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    “Our recent corporate event, expertly organized by [Marriage Organization Name], exceeded all expectations. Their professionalism and understanding of our brand were evident in every aspect of planning and execution. The event ran flawlessly, impressing our clients and partners. [Marriage Organization Name] allowed us to focus on our business while ensuring the event's success. Highly recommended for any corporate event, they are truly top-notch”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img
                                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                                        src="https://i.ibb.co/B356Fdm/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg"
                                        alt=""
                                    />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">Jimmy Carter</h1>
                                        <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Reviews;
