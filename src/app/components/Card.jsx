import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({src, title, desc,link}) => {
    return (
        <div className="card md:p-4 glass">
            <figure className='md:h-[360px]'>
                <Image src={src} alt='cardimage'/>
            </figure>
            <div className="card-body md:h-[200px] text-green-700">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions md:mt-5 justify-center">
                <Link href={`${link}`} target='blank'><button className="btn bg-green-500 text-white">Read Now!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;