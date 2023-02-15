import React from 'react';
import { useLoaderData } from 'react-router-dom';



const ServDetails = () => {
    // const{user} = useContext(AuthContext)
    const { name, details, charge } = useLoaderData();
    
    return (
        <div>

            <div className='font-black my-12 non-italic hover:italic text-8xl'>{name}</div>
            <div>
                <div>
                    <div className=' text-5xl my-6 text-start'>{details}</div>
                    <p className='text-4xl'> For this service I will charge <span className='text-7xl '>{charge}</span></p>
                </div>
                <div>
                    
                </div>
            </div>
            

        </div>
    );
};

export default ServDetails;