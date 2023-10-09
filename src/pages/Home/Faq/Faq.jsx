import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Faq = () => {


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  return (
      <>
        <div className="bg-gray-900 text-white">
     <h1 className="text-4xl font-bold  text-center py-8 pb-8 text-pink-500">Frequently Asked Questions</h1>
            <div className="collapse collapse-plus" data-aos="fade-left">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus" data-aos="fade-left">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus" data-aos="fade-left">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
            </div>
      </div>
      </>

    );
};

export default Faq;