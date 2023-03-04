import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ServiceCard = ({ service }) => {
    const { _id, img, name, details } = service

    useTitle('service')
    return (
        <div className="">
            {/* <figure><img src={img} alt="Service" /></figure> */}
            {/* <PhotoProvider>
                <PhotoView src="/1.jpg">
                    <img src={img} alt="Service" />
                </PhotoView>
            </PhotoProvider> */}

            <div className="card w-96 glass">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Service" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`} className="btn btn-primary" >Book Now</Link>
                    </div>
                </div>
            </div>





            {/* 
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn btn-primary" >Book Now</Link>
                </div>
            </div> 
            */}
        </div>
    );
};

export default ServiceCard;