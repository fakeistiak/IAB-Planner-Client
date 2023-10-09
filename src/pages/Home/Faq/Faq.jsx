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
            <div className="collapse collapse-plus" data-aos="fade-down">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    How can I personalize my wedding?
  </div>
  <div className="collapse-content"> 
    <p> Personalize your wedding by incorporating elements that reflect your personality and relationship, such as custom vows, unique decorations, special music, and personalized wedding favors.</p>
  </div>
</div>
<div className="collapse collapse-plus" data-aos="fade-down">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    How do I plan a successful corporate event?
  </div>
  <div className="collapse-content"> 
    <p>To plan a successful corporate event, define your goals, create a budget, choose an appropriate venue, select engaging speakers or activities, coordinate logistics, and promote the event to your target audience.</p>
  </div>
</div>
<div className="collapse collapse-plus" data-aos="fade-down">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
   How can I make a childs birthday celebration special?
  </div>
  <div className="collapse-content"> 
    <p> Make a childs birthday special by planning age-appropriate activities, decorating with their favorite themes, including fun games, providing a cake they love, and involving them in the planning process.</p>
  </div>
            </div>
      </div>
      </>

    );
};

export default Faq;