import React from 'react';

const ReviewCart = ({review}) => {
    const { post} =review
    return (
        <div className='h-28 mx-auto text-start w-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 my-5  hover:box-content'>
           <h1>Posted by</h1>
           <h2>
           {post}
           </h2>
        </div>
    );
};

export default ReviewCart;