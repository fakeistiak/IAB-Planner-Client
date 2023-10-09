import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Marquee from 'react-fast-marquee';

const imageUrls = [
  'https://i.ibb.co/crpcsL4/jeremy-wong-weddings-K8-Ki-CHh4-WU4-unsplash.jpg',
  'https://i.ibb.co/y58xY7p/lucas-law-MTFq-QH1trs-A-unsplash.jpg',
  'https://i.ibb.co/jzTYwJq/nicole-geri-E4-S2-V5m-V4-Yc-unsplash.jpg',
  'https://i.ibb.co/p0rHYSq/jonathan-borba-B-R3rm-JPe-SE-unsplash.jpg',
  'https://i.ibb.co/P5mKjj5/vitor-monthay-JL2n-GWXCJo-unsplash.jpg',
  'https://i.ibb.co/crpcsL4/jeremy-wong-weddings-K8-Ki-CHh4-WU4-unsplash.jpg',
  'https://i.ibb.co/y58xY7p/lucas-law-MTFq-QH1trs-A-unsplash.jpg',
];

const Demo = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageUrls.map((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        return new Promise((resolve) => {
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setIsImagesLoaded(true);
    };

    preloadImages();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between">
      <h1 className="text-white text-center text-4xl pb-12 font-bold">
        Our <span className="text-pink-500">Decorations</span> in <br /> Various Gatherings
      </h1>
      <div className="flex-grow">
        {isImagesLoaded ? (
          <Marquee gradient={false} speed={80}>
            <div className="carousel h-[480px] w-[4000px] ">
              <ul className="list-none h-full flex p-0 m-0">
                {imageUrls.map((imageUrl, index) => (
                  <li
                    key={index}
                    className="border-3 border-solid border-teal flex-shrink-0 animate-scrolling animate-linear animate-infinite duration-10000 w-1/5"
                  >
                    <img
                      src={imageUrl}
                      className="w-full h-full object-cover pr-4 rounded-lg "
                      alt={`Image ${index + 1}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Marquee>
        ) : (
          <div className="text-white text-center">Loading images...</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
