import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));

const IntellectualProperty = () => {
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <Fragment>
                <div className='flex mx-auto container py-5 h-full'>
                    <div className='w-1/6 pt-5'>
                        <Sidebar />
                    </div>
                    <div className='w-5/6'>
                        <h1 className='text-3xl font-bold py-10'>Intellectual Property</h1>
                        <p className='font-bold'>General Terms</p>
                        <p className='text-justify'>If you proceed to use TAVAAS's website (www.ilyn.global) and its platforms, you are expected to abide by all the Legal Notes included here and these are governed by and will be interpreted according to the laws of the People’s Republic of Bangladesh. Here, “We”, “Us”, “Our”, “Website”, “Site”, “System”, “Platforms” includes (All Social Media, Mobile App, Wearable Technology) will refer to TAVAAS and “You”, “Your”, “User” will refer to Customers and Visitors. If you cannot abide by all the Legal Notes enlisted, please refrain from using the website and its other platforms and affiliates. You must agree to use the website only for your own personal and non-commercial purposes.</p>
                        <br />
                        <p className='text-justify'>TAVAAS reserves all the rights to update and modify Legal Notes without prior notice. By continuing to use the TAVAAS website and platforms, we will consider your consent to all the updates and modifications made to Legal Notes.</p>
                        <br />
                        <p className='font-bold'>Ownership</p>
                        <p className='text-justify'>All materials on the website and platforms such as (including but not limited to) images, ideas, designs, drawings, animations, illustrations, videos, executable files, logos, infographics, interactive features, articles, stickers, information, icons, annotations, service marks, branding, artwork, computer code, written text, domain name are the exclusive property of TAVAAS and its affiliates. You are in no case authorized to publish, sell, edit, translate, copy, extract, distribute, transmit, post, modify or create derivative works of or in any way that might exploit our content. You can use the content on the website or platform only for viewing purposes. We have the right to claim ownership of any deformation, alteration or modification of content that might cause damage to our work, honour and reputation. Any unauthorized usage of contents and third-party linkings are strictly prohibited and may subject you to criminal and civil offences, penalties and charges.</p>
                        <br />
                        <p className='text-justify'>In the case of the product, ownership will pass to you if we receive full payment which will include the price of the product, VAT and the delivery charge (in case of home delivery).</p>
                        <p className='font-bold'>Protection of Intellectual and Industrial Property Rights</p>
                        <p className='text-justify'>TAVAAS is committed to complying with copyright and related laws which include the Digital Millennium Copyright Act (DMCA) and also expects all users to comply with all laws. You cannot use the website or platform for any sort of illegal or unauthorized purposes. You cannot use any hardware or software that might interfere with our operations. You cannot surreptitiously interpret any data or personal information from the website or platform. You agree not to use any unfair means to interrupt or attempt to interrupt our operations with our website and platforms.</p>
                        <p className='text-justify'><span className='font-bold'>Copyright:</span> All materials on the website and platforms such as (including but not limited to) images, ideas, designs, drawings, animations, illustrations, videos, executable files, logos, infographics, interactive features, articles, stickers, information, icons, annotations, service marks, branding, artwork, computer code, written text, domain name etc. are protected under intellectual property laws. TAVAAS owns all rights and licenses in or to the content on TAVAAS's website and platforms. Unauthorized usage of any content is a breach of these Legal Notes and will violate copyright, trade dress, patent and other laws. You agree that none of the content can be published, sold, edited, translated, copied, extracted, distributed, transmitted, posted, modified or created derivative works of or in any way. TAVAAS reserves all rights which are not expressly granted herein. Any unauthorized usage will be handled legally.</p>
                        <br />
                        <p className='text-justify'><span className='font-bold'>Trademark:</span> All emblems, logotypes, service mark, trade dress, button icons, artwork, logos, “ILLIYEEN”, “ILYN”, and anything either they are registered or not but displayed on the website and platforms, including but not limited to the “ILLIYEEN” trademark and all the related brand marks on the website or platform will remain as the exclusive property of “ILLIYEEN”. Such trademarks and signs are discouraged to use with any product or services that do not originate with TAVAAS and TAVAAS's affiliates, which might arise confusion among users, or in any manner discredit the “ILLIYEEN” name and trademark and all the products bearing “ILLIYEEN” trademark. Any unauthorized usage will be handled legally.</p>
                    </div>
                </div>
                <div className='py-10'>
                    <DisplayCenter />
                </div>
            </Fragment>
        </Suspense>
    );
};

export default IntellectualProperty;