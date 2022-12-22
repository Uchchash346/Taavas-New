import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const Panjabi = () => {
    let params = useParams();
    console.log(params.product_title)
    return (
        <Fragment>
            <div className='pt-16'>
                <h1>{params.product_title}</h1>
            </div>
        </Fragment>
    );
};

export default Panjabi;