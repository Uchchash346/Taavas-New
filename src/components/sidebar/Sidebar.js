import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        axios
            .get("/data/sidebar.json")
            .then((res) => setSidebar(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <Fragment>
            <div className="w-60 h-auto  pt-5 absolute">
                <ul className="relative">
                    {
                        sidebar.map((data, index) => {
                            return (
                                <li className="relative" key={index}>
                                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-black transition duration-300 ease-in-out" href={data.urlLink} data-mdb-ripple="true" data-mdb-ripple-color="dark">{data.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    );
};

export default Sidebar;