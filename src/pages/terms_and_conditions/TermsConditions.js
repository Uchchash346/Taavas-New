import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));

const TermsConditions = () => {
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <Fragment>
                <div className='flex mx-auto container py-5 h-full'>
                    <div className='w-1/6 pt-5'>
                        <Sidebar />
                    </div>
                    <div className='w-5/6'>
                        <h1 className='text-3xl font-bold py-10'>Terms & Conditions</h1>
                        <p className='text-justify'>Welcome to ILLIYEEN! You are reading these Terms and Conditions as you are using the website www.ilyn.global. Here, “We”, “Us”, “Our”, “Website”, “Site”, “System”, “Platforms” includes (All Social Media, Mobile App, Wearable Technology) will refer to ILLIYEEN and “You”, “Your”, “User” will refer to Customers and Visitors.</p>
                        <br />
                        <p className='text-justify'>The Terms and Conditions elaborated on this page directly impact the manner users use ILLIYEEN’s website and any content available on the Platform. All orders placed on the site or the other platforms presuppose the acknowledgment of the Terms and Conditions by the ordering customer and will be bound by these Terms and Conditions. Therefore, you, as a customer or user of the Platform, are expected to carefully go through all the following details.</p>
                        <br />
                        <p className='text-justify'>By accessing, visiting, and using the site’s services, content, and other resources, you consciously agree to the Terms and Conditions stated on this page. If you deny conforming to any or all of the conditions or clauses mentioned in these Terms and Conditions, you are advised to stop using our site and platforms right away.</p>
                        <br />
                        <p className='font-bold'>Intellectual Property Rights</p>
                        <br />
                        <p className='text-justify'>www.ilyn.global owns all content, resources, and materials available on site and platforms solely unless we state otherwise. We allow selected third parties to establish links to existing text or content available on the site only if they explicitly acknowledge the source of origin. We strictly prohibit any types of partial or total modification or reproduction made to any existing resource or content of this site. We may also terminate the site or platform users’ accounts if they infringe on third-party copyrights.</p>
                        <br />
                        <p className='font-bold'>User Content</p>
                        <br />
                        <p className='text-justify'>Our Terms and Conditions state clearly that any form of text, recorded audio, images, videos, or other original resources you choose to publish on the site or the platform will be deemed as your content. With this action, you give us a globally non-exclusive and irrevocable license to view, use, translate, reproduce, distribute, outsource and publish among other chosen media. We will use the content for legal issues if required.</p>
                        <br />
                        <p className='text-justify'>
                            Your Content must be exclusively owned by you, meaning, it cannot violate the copyright of any third party. We reserve the right to omit, change or alter your text or resources at any time without prior notice.
                        </p>
                        <br />
                        <p className='font-bold'>Termination of Usage</p>
                        <br />
                        <p className='text-justify'>
                            ILLIYEEN reserves the right to change, modify, alter or extend these terms and conditions or stop or terminate a user’s visit to the site or the platform at any time without prior notice if we deem it necessary because of the user’s suspicious activities or violation of any of the terms, conditions or privacy policies of the site. In every case of change or alteration of these terms and conditions, the latest revised version will apply.
                        </p>
                        <p className='font-bold'>Important Disclaimers</p>
                        <br />
                        <p className='text-justify'>ILLIYEEN IS NOT LIABLE OR RESPONSIBLE FOR ANY DAMAGES OR INJURIES YOU MIGHT SUSTAIN CAUSED BY YOUR USE OR AN INABILITY OF DOING SO, THE FEATURES OFFERED BY www.ilyn.global AND ITS PLATFORMS.
                        </p>

                    </div>
                </div>
                <div className='py-10'>
                    <DisplayCenter />
                </div>
            </Fragment>
        </Suspense>
    );
};

export default TermsConditions;