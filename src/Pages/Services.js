import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';
import ServicesCart from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceList')
            .then(res => res.json())
            .then(data => setServices(data))
            // .then(data => console.log(data))
    }, [])

    const handlePost = (e) => {
        e.preventDefault();
        const form = e.target;
        // const =user?.email|| 'unregistered';
        const post = form.post.value

        const review = {
            post: post
        }
        console.log(review)

        fetch(`http://localhost:5000/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => {
                console.error(err.message);
            })

    }
 
    return (
        <div>
            <p className='text-2xl font-bold '>The Services which will be provided by me</p>
            <div className='grid grid-cols-3 container center gap-4 my-6 mx-6'>
                
            {
                    services.map(service=><ServicesCart key={service._id}
                        
                        service={service} ></ServicesCart>
                    )
                }
            </div>

            <div className='review bg-gradient-to-r from-orange-500 my-20 py-20'>
                <Reviews ></Reviews>
                <h1 className='my-8 pt-4 pb-0'>do u want to submit a review ?</h1>
                <form onSubmit={handlePost}>
                    {/* <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div> */}
                    <div>
                        <input type="text" name='post' placeholder="Type here" className="textarea textarea-bordered textarea-lg w-full max-w-3xl" />
                        <div className='justify-evenly'>
                            <button className="btn btn-error w-full max-w-xs" >Post</button>
                            <button className="btn btn-error w-full max-w-xs" >Edit</button>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    );
};

export default Services;