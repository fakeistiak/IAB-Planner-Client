import { Link } from "react-router-dom";
import heroPic from "../../../assets/heroImage.jpg"
const Hero = () => {
    return (
      <div className="hero min-h-[90vh] bg-base-200 text-white" style={{ backgroundImage: `url(${heroPic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
  <div className="hero-content text-center">
    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Let's Decorate Your<span className="text-pink-500"> Special </span>Day</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a><Link to="/Demo" className="btn btn-secondary text-white">Some of Our Work</Link></a>
    </div>
  </div>
</div>

    );
};

export default Hero;