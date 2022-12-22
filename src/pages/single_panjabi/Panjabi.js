import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Panjabi = () => {
    // let { id } = useParams();
    const location = useLocation()
    console.log(location)
    return (
        <Fragment>
            <div className='pt-16 mx-auto px-56'>
                {/* <h1>{location.state.product_title}</h1> */}
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        
                    </div>
                    <div>
                        <p className='text-center'>{location.state.product_title}</p>
                        <p className='text-center text-gray-400'>{location.state.code}</p>
                        <p className='text-center font-bold'>BDT {location.state.regular_price}</p>
                        {/* <p className=''>Color: {location.state.color}</p> */}
                        {/* Need size guide section */}
                        {/* <a href="/" className='border bg-black mt-3 text-white px-8 py-5 w-auto uppercase text-center'>Add to Bag</a> */}
                        <button type="" className='border bg-black mt-3 text-white py-2 w-64 uppercase'>Add to Bag</button>
                        <br />
                        <button type="" className='border mt-3 text-black py-2 w-64 uppercase'>Find In Store</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Panjabi;