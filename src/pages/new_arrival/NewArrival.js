import React, { Fragment, useState } from 'react';
// import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import '../../assets/css/style.css'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const NewArrival = () => {

    const images = [
         "https://i.ibb.co/94VNyt3/im1.jpg" ,
         "https://i.ibb.co/Yp2FF2M/im2.webp" ,
         "https://i.ibb.co/26HLrNM/im3.webp" ,
         "https://i.ibb.co/PtFw5wx/im4.webp" ,
         "https://i.ibb.co/Z6zK8Gr/im5.webp" ,
         "https://i.ibb.co/f1YbRLT/im6.webp" ,
         "https://i.ibb.co/K0s7Crt/im7.webp" ,
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <Fragment>
            {isOpen && <Lightbox
                         imageTitle={images[imgIndex].title}
                         imageCaption={images[imgIndex].caption}
                         mainSrc={images[imgIndex]}
                         nextSrc={images[(imgIndex + 1) % images.length]}
                         prevSrc={images[(imgIndex + images.length - 1) % images.length]}
                         onCloseRequest={() => setIsOpen(false)}
                         onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
                         onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
                     />}
            <div className='mt-16 mx-auto px-5 new-arrival'>
                <div className='flex'>                    
                <div className='w-2/3'>
                    <div className='flex'>
                        <img src={images[0]} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                        <img src={images[1]} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                    </div>
                    <div className='my-10 border border-none bg-white new-man-product-desc h-auto'>
                        <div className='p-20'>
                            <p className=''>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
                            <p className='text-sm text-gray-500 leading-10 pt-5'><span className='font-bold text-black'>Fit -</span> Relaxed fit</p>
                            <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
                            <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Art. No. -</span> 1074074001</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={images[2]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                        <img src={images[3]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                    </div>
                    <div className='flex'>
                        <img src={images[4]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                        <img src={images[5]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                    </div>
                    <img src={images[6]} alt="" className='w-1/2 p-1 h-auto block mx-auto' onClick={() => setIsOpen(true)}  />
                </div>
                <div className='w-1/3 px-10'>
                    <div className='flex flex-row pl-4'>
                        <div className='w-3/4'>
                            <p className='font-bold'>Relaxed Fit Jumper</p>
                        </div>
                        <div className='w-1/4'>
                            <BsHeart className='wishlist-icon' />
                        </div>
                    </div>
                </div>
                </div>
                </div>
            {/* </div> */}
        </Fragment>
    );
};

export default NewArrival;



// {/* {
//           images.map((image, idx) => {
//               if (idx === 1) {
//                   return (
//                       <div>
//                           <img src={image} alt="" className='w-1/2 p-1 h-auto' />
//                           <div className='my-10 border border-none bg-white new-man-product-desc h-auto'>
//                               <div className='p-20'>
//                               <p className=''>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
//                               <p className='text-sm text-gray-500 leading-10 pt-5'><span className='font-bold text-black'>Fit -</span> Relaxed fit</p>
//                               <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
//                               <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Art. No. -</span> 1074074001</p>
//                           </div>
//                       </div>
//                   </div>
//                   )
//               }else{
//                   return <img src={image} alt="" className='w-1/2 p-1 h-auto'/>
//               }
//           })
//   } */}
//   {/* <div className='w-1/3 px-10'>
//       <div className='flex flex-row pl-4'>
//           <div className='w-3/4'>
//               <p className='font-bold'>Relaxed Fit Jumper</p>
//           </div>
//           <div className='w-1/4'>
//               <BsHeart className='wishlist-icon' />
//           </div>
//       </div>
//   </div> */}




                        // {/* // {images.map(image, index) => {
                        //     //     if(index==2){
                        //     //         return <>
                        //     // <img src={image} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                        //     // <div className='my-10 border border-none bg-white new-man-product-desc h-auto'>
                        //     //     <div className='p-20'>
                        //     //         <p className=''>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
                        //     //         <p className='text-sm text-gray-500 leading-10 pt-5'><span className='font-bold text-black'>Fit -</span> Relaxed fit</p>
                        //     //         <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
                        //     //         <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Art. No. -</span> 1074074001</p>
                        //     //     </div>
                        //     // </div>
                        //     // </>
                        //     //     }else{
                        //     //     <img src={image} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                        //     // }
                        //     // }}


                        //     {/* <div className='flex'>
                        //     <img src={image1} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                        //     <img src={image2} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} />
                        // </div> */}
                        // {/* <div className='my-10 border border-none bg-white new-man-product-desc h-auto'>
                        //     <div className='p-20'>
                        //         <p className=''>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
                        //         <p className='text-sm text-gray-500 leading-10 pt-5'><span className='font-bold text-black'>Fit -</span> Relaxed fit</p>
                        //         <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
                        //         <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Art. No. -</span> 1074074001</p>
                        //     </div>
                        // </div> */}
                        // {/* <div className='flex'> */}
                        // {/* <button onClick={() => setIsOpen(true)}>Preview Images</button> */}
                        // {/* <img src={image3} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                        // {/* {isOpen && <Lightbox
                        //         imageTitle={images[imgIndex].title}
                        //         imageCaption={images[imgIndex].caption}
                        //         mainSrc={images[imgIndex].url}
                        //         nextSrc={images[(imgIndex + 1) % images.length].url}
                        //         prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
                        //         onCloseRequest={() => setIsOpen(false)}
                        //         onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
                        //         onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
                        //     />} */}
                        // {/* <img src={image4} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                        // {/* </div> */}
                        // {/* <div className='flex'>
                        //     <img src={image5} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                        //     <img src={image6} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} />
                        // </div>                        
                        // <img src={image7} alt="" className='w-1/2 p-1 h-auto block mx-auto' onClick={() => setIsOpen(true)} /> */} */}