import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';



const ServDetails = () => {
    // const{user} = useContext(AuthContext)
    const { name, details, charge } = useLoaderData();
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

            <div className='font-black my-12 non-italic hover:italic text-8xl'>{name}</div>
            <div>
                <div>
                    <div className=' text-5xl my-6 text-start'>{details}</div>
                    <p className='text-4xl'> For this service I will charge <span className='text-7xl '>{charge}</span></p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='review bg-gradient-to-r from-orange-500 my-20 py-20'>
                <Reviews></Reviews>
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

export default ServDetails;