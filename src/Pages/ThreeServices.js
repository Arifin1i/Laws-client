import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThreeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/serviceList")
            .then((res) => res.json())
            .then((data) => {
                setServices(data.slice(0, 3));
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="grid grid-cols-4 container center gap-4 my-6 mx-6">
            {services.map(service => (
                <div key={service.id}>
                    {/* <h2>{service.name}</h2> */}

                    <div className="card w-72 bg-base-100 shadow-xl image-full">
                        <figure><img src={service.img} alt="Service" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.details.slice(0, 100)}</p>
                            <div className="card-actions justify-end">
                                {/* <Link to={`/services/${_id}`} className="btn btn-primary" >Book Now</Link> */}
                            </div>
                        </div>
                    </div>

                    {/* <p>{service.details}</p> */}
                </div>
            ))}

            <div className="flex justify-items-center content-center">
                <Link to={`/services`} className="btn rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </Link>
            </div>

        </div>
    );
};

export default ThreeServices;
