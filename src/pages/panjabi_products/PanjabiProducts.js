import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                {/* <h1 className='text-end pt-16 text-sm'>Filters & Sort</h1> */}
            </div>
            <div className="grid grid-cols-5 gap-2 pt-3 pb-5 mx-5">
                {
                    panjabi.map((data, index) => {
                        const { id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price } = data;
                        return (
                            <div key={index}>
                                <Link to={`/panjabis/${data.id}`}
                                    state={{ id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price }}
                                >
                                    <img src={data.images[0]}
                                        onMouseEnter={(e) => e.target.src = data.images[1]}
                                        onMouseLeave={(e) => e.target.src = data.images[0]}
                                        alt="" />
                                    <h1 className='text-left'><a href="/panjabis">{data.product_title}</a></h1>
                                    <p className='text-inherit font-semibold'>Product Code: {data.code}</p>
                                    <p>BDT: {data.regular_price}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default PanjabiProducts;