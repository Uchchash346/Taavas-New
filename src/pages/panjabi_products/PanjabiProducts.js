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
            <div className="grid grid-cols-5 gap-2">
                <div>
                    {
                        panjabi.map((data, index) => {
                            return (
                                <div key={index}>
                                    <img src={data.images[0]} alt="" />
                                    <h1>{data.id}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default PanjabiProducts;