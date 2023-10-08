import { useLoaderData, useParams } from "react-router-dom";
const Details = () => {

    const { id } = useParams();
    
    const services = useLoaderData();
    console.log(services)
    const service = services.find(item => item.id === id);
    console.log(service);
    return (
   <div>
  <div className="w-screen bg-gray-900 text-white shadow-xl">
    <figure>
      <img src={service.image} alt="Shoes" className="w-2/5 shadow-lg rounded-lg h-[90vh] mx-auto object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-4xl">{service.name}</h2>
                    <p className="text-2xl">{service.description}</p>
                    <p className="text-2xl pb-4">{service.price}</p>
      <div className="card-actions flex">
        <button className="btn btn-secondary text-white">Buy Now</button>
      </div>
    </div>
  </div>
</div>




    );
};

export default Details;