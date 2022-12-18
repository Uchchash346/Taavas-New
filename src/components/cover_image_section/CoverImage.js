import React, { Fragment } from 'react';
import coverImage from '../../assets/cover_image/cover_image.webp';
const CoverImage = () => {
    return (
        <Fragment>
            <div
                className='relative top-14 w-full max-h-screen'            >
                <img
                    src={coverImage}
                    alt=""
                    className='w-full align-middle inline-block mx-w-full'
                />
            </div>
        </Fragment>
    );
};

export default CoverImage;