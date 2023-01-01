import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const ModalComponent = () => {

    // const [displayPage, setDisplayPage] = useState([]);

    // let subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    // const [panjabi, setPanjabi] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("/data/panjabi_products.json")
    //         .then((res) => setPanjabi(res.data))
    //         .catch((err) => console.log(err))
    // }, [])

    // const [data, setData] = useState();
    // const [sorted, setSortType] = useState('highToLow')

    // useEffect(() => {
    //     const sortPrice = type => {
    //         const types = {
    //             lowToHigh: 'lowToHigh',
    //             highToLow: 'highToLow'
    //         };
    //         const sortByPrice = types[type];
    //         const lowToHighPrice = (a, b) => {
    //             const priceLowToHigh = a.price - b.price;
    //             setPanjabi(priceLowToHigh)
    //         }
    //     }
    // })

    // const lowToHigh = (a,b) => {
    //     const priceLowToHigh =  a.price - b.price;
    //     setPanjabi(priceLowToHigh)        
    // }


    // const onChange = (e) => {
    //     const value = e.target.value

    //     switch (value) {
    //         case "ascending":
    //             setDisplayPage(displayPage.sort((a, b) => a.label.localeCompare(b.label)))
    //             break
    //         case "descending":
    //             setDisplayPage(displayPage.sort((a, b) => b.label.localeCompare(a.label)))
    //             break
    //         case "high-price":
    //             setDisplayPage(displayPage.sort((a, b) => b.price - a.price))
    //             break
    //         case "priceLowToHigh":
    //             setDisplayPage(displayPage.sort((a, b) => a.price - b.price))
    //             break
    //     }
    // }

    return (
        <Fragment>
            <div className='mt-16'>
                {/* <button onClick={openModal}>Filters & Sort</button> */}
                {/* <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                    </form> */}
                {

                }
                {/* <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="priceHighToLow">Price - High to Low</option>
                    <option value="lowToHigh">Price - Low to High</option>
                </select> */}
                {/* </Modal> */}
                {/* {
                    displayPage.map((data, index) => {
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
                } */}
            </div>
        </Fragment>
    );
};

export default ModalComponent;