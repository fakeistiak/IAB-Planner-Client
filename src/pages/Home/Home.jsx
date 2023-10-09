import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer/Footer";
import Hero from "../Shared/Hero/Hero";
import Services from "../Shared/Services/Services";
import Faq from "./Faq/Faq";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Reviews />
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;