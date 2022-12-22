import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

const PanjabiProducts = () => {
    const [panjabi, setPanjabi] = useState([]);
    useEffect(() => {
        axios
            .get("/data/panjabi_products.json")
            .then((res) => setPanjabi(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment>
            <div>
                <h1 className='text-center pt-16 text-sm'>{panjabi.length} Items</h1>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-3 pb-5 mx-5">
                {
                    panjabi.map((data, index) => {

                        return (
                            <div key={index}>
                                <img src={data.images[0]} className="hover:`{data.images[1]}`" alt="" />
                                <h1 className='text-left'><a href="/panjabis">{data.product_title}</a></h1>
                                <p className='text-inherit font-semibold'>Product Code: {data.code}</p>
                                <p>BDT: {data.regular_price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default PanjabiProducts;