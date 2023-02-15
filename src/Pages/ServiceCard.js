import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, name, details } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn btn-primary" >Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;