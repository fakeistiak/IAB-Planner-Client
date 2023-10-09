import { Link, useLoaderData, useParams } from "react-router-dom";
import PaymentMethod from "../../PaymentMethod/PaymentMethod";
const Details = () => {

    const { id } = useParams();
    
    const services = useLoaderData();
    console.log(services)
    const service = services.find(item => item.id === id);
    console.log(service);
    return (
   <div>
  <div className=" bg-gray-900 text-white shadow-xl">
    <figure>
      <img src={service.image} alt="Shoes" className="w-2/5 shadow-lg rounded-lg h-[90vh] mx-auto object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-4xl">{service.name}</h2>
                    <p className="text-2xl">{service.description}</p>
                    <p className="text-2xl pb-4">{service.price}</p>
      <div className="card-actions flex">
              <button className="btn btn-secondary text-white">Buy Now</button>
               <Link to="/services" className="btn btn-secondary text-white">Go back to Service</Link>
            </div>
    </div>
        </div>
<PaymentMethod></PaymentMethod>
</div>




    );
};

export default Details;