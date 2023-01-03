import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NewArrivalAllPanjabis = () => {
    const [panjabi, setPanjabi] = useState([]);

    useEffect(() => {
        axios
            .get("/data/new_arrival_panjabi_products.json")
            .then((res) => setPanjabi(res.data))
            .catch((err) => console.log(err))
    }, [])

    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price > b.price ? -1 : 1) }, //low to high
        descending: { method: (a, b) => (a.price > b.price ? 1 : -1) } // high to low
    }

    return (
        <Fragment>
            <div className='grid grid-cols-2'>
                <div className='mx-5'>
                    <h1 className='text-left mt-16 text-sm'>{panjabi.length} Items</h1>
                </div>
                <div className='mx-5 text-right sort-price'>
                    <select
                        className='mt-16'
                        // onChange={e => getFilterSortParams("filterSort", e.target.value)}
                        defaultValue={'DEFAULT'}
                        onChange={(e) => setSortState(e.target.value)}
                    >
                        <option value="DEFAULT" >Filter by Price</option>
                        <option value="descending">Price - High to Low</option>
                        <option value="ascending">Price - Low to High</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-3 pb-5 mx-5">
                {
                    panjabi
                        .sort(sortMethods[sortState].method)
                        .map((data, index) => {
                            const { id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, dummyImages } = data;
                            return (
                                <div key={index}>
                                    <Link to={`/all-new-panjabis/${data.id}`}
                                        state={{ id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, dummyImages }}
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

export default NewArrivalAllPanjabis;