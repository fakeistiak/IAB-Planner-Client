import Navbar from "../../Shared/NavBar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
const Details = () => {

    const { id } = useParams();
    
    const services = useLoaderData();
    console.log(services)
    const service = services.find(item => item.id === id);
    console.log(service);
    return (
        <div>
            <Navbar></Navbar>
           
        </div>
    );
};

export default Details;