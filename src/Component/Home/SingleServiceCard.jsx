import { NavLink } from "react-router-dom";


const SingleServiceCard = ({card}) => {

    const{id, service_name, short_description, home_image, price, color} = card || {}
    


    return (
        <div>
            <div className="card shadow-xl bg-[#EEFFEF]">
                <figure className="px-3 pt-4">
                    <img src={home_image} alt="Service" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-bold">{service_name}</h2>
                    <p>{short_description}</p>
                    <div className="bg-[#A1400B] px-10 py-2 rounded-full">
                        <p className="text-white">Starting Price : {price}</p>
                    </div>
                    <NavLink to={`/${id}`}><div className="card-actions">
                        <button className=" bg-[#3EAE78] text-white font-semibold rounded px-4 py-2 hover:text-[#3EAE78] hover:bg-white ">Click for Details</button>
                    </div></NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default SingleServiceCard;
