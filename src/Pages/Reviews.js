import React, { useEffect, useState } from 'react';
import ReviewCart from './ReviewCart';

const Reviews = () => {
    
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch ('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReviews(data))
            // .then(data => console.log(data))
    }, [])
    return (
        <div>
            {
                reviews.map(review=><ReviewCart 
                    key={review._id}
                    review={review}
                ></ReviewCart>)
            }
        </div>
    );
};

export default Reviews;