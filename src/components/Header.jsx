import React from 'react';


export default function Header(props){
    return (
        <div className="bg-brandHeader text-white flex  justify-between px-8 py-4  rounded">
        <span className='text-xl'>
        DNV Healthcare
        </span>
        <div className='text-base flex items-center'>
            <div className='bg-white text-brandHeader rounded-full p-1 font-medium mx-3'>KM</div>
            <span>Katherine Martinez</span>
        </div>
</div>

    )
}