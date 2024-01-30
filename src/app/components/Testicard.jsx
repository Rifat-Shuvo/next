
import React from 'react';

const Testicard = ({title, desc,name}) => {
    return (
        <div className='text-center'>
            <div className='w-full md:w-3/4 mx-auto'>
                <h1 className='text-xl'>{title}</h1>
                <p className='text-justify my-5 px-3'>{desc}</p>
                <p className='italic'>Feedback by {name}</p>
            </div>
        </div>
    );
};

export default Testicard;