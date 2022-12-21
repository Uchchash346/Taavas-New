import React, { Fragment } from 'react';

import DisplayCenterImage from '../../assets/display_center_image/display_center.webp';

const DisplayCenter = () => {
    return (
        <Fragment>
            <div className='display-center-section relative text-center'>
                <img src={DisplayCenterImage} alt="" className='w-full h-96' />
                <div className='display-center-section-area absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-96 h-16 font-semibold'>
                    <a href="/panjabis" className='uppercase tracking-widest inline-block align-middle p-5'>find your display center</a>
                </div>
            </div>
        </Fragment>
    );
};

export default DisplayCenter;