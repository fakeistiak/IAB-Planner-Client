import Footer from "../Shared/Footer/Footer";
import Hero from "../Shared/Hero/Hero";
import Navbar from "../Shared/NavBar/Navbar";
import Services from "../Shared/Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;