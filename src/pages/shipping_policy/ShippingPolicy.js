import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));

const ShippingPolicy = () => {
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <Fragment>
                <div className='flex mx-auto container py-5 h-full'>
                    <div className='w-1/6 pt-5'>
                        <Sidebar />
                    </div>
                    <div className='w-5/6'>
                        <h1 className='text-3xl font-bold py-10'>Shipping Policy</h1>
                        <p className='text-justify'>
                            Customers can avail themselves of nationwide and worldwide shipping options when ordering online. We process one shipping address per order. If you would like to ship to a different address, you may consider placing separate orders and making payments for them separately. The shipping date depends on your preferred delivery location and delivery type. Please note that for locations Outside Dhaka, you need to collect the delivery items from your nearest courier branch.
                        </p>
                        <p className='text-justify'>Here is the delivery schedule that we follow:</p>

                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg py-5">
                            <table class="w-full text-sm text-left text-white">
                                <thead class="text-xs  uppercase bg-black text-white">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">Delivery Location</th>
                                        <th scope="col" class="py-3 px-6">Order Time</th>
                                        <th scope="col" class="py-3 px-6">Delivery Type</th>
                                        <th scope="col" class="py-3 px-6">Cost</th>
                                        <th scope="col" class="py-3 px-6">Delivery Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-[#F1F1F1] border-b border-gray-500 text-black">
                                        <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap">Inside Dhaka</th>
                                        <td class="py-4 px-6">00:00 – 23:59 hrs</td>
                                        <td class="py-4 px-6">Regular</td>
                                        <td class="py-4 px-6">BDT. 60/-*, Free for orders above BDT 5000/-</td>
                                        <td class="py-4 px-6">Within 3-5 working days</td>
                                    </tr>
                                    <tr class="bg-[#FEFEFE] border-b border-gray-500 text-black">
                                        <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap ">Inside Dhaka Urgent</th>
                                        <td class="py-4 px-6">00:00 – 12:00 hrs</td>
                                        <td class="py-4 px-6">Urgent</td>
                                        <td class="py-4 px-6">BDT. 350/-</td>
                                        <td class="py-4 px-6">Next Day 24 hrs**</td>
                                    </tr>
                                    <tr class="text-black border-b border-gray-500">
                                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">Outside Dhaka</th>
                                        <td class="py-4 px-6">00:00 – 23:59 hrs</td>
                                        <td class="py-4 px-6">Regular</td>
                                        <td class="py-4 px-6">BDT. 100/-</td>
                                        <td class="py-4 px-6">Within 3-6 working days</td>
                                    </tr>
                                    <tr class="text-black border-gray-500">
                                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">Worldwide</th>
                                        <td class="py-4 px-6">00:00 – 23:59 hrs</td>
                                        <td class="py-4 px-6">Regular</td>
                                        <td class="py-4 px-6">Depends***</td>
                                        <td class="py-4 px-6">Depends***</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='text-sm py-5'>
                            * Delivery inside Dhaka city is free if the order value is TK. 5000 or above. <br />
                            ** Urgent delivery is not available on Fridays and govt. Holidays. <br />
                            *** International delivery cost depends on the country of location and parcel’s weight or size. Contact our service center to get an estimated International delivery cost.
                        </p>
                        <p className='font-bold py-5'>How do I check the status of my order?</p>
                        <p className='text-justify'>You can easily track your order using the Order History option after logging in to our website or call our Service Center hotline.</p>

                        <p className='font-bold py-5'>My items haven’t arrived yet. What can I do?</p>
                        <p className='text-justify'>First, try to track your order using your order ID from the Order History page by logging in to the website or platform. Or you can call our Service Center hotline for this information.</p>

                        <p className='font-bold py-5'>What if I am not there to receive the order?</p>
                        <p className='text-justify'>Someone on your behalf will receive the order. In this case, we would require verification (phone, SMS, order ID, etc.) & filling out the acknowledgment form to receive the order.</p>

                        <p className='font-bold py-5'>What can I do in case of delayed delivery?</p>
                        <p className='text-justify'>Sometimes, the product delivery may get delayed due to unavoidable circumstances, and it might exceed the delivery schedule mentioned above. If you have any queries regarding the delivery, please reach us through our Service Center Hotline.</p>

                        <p className='font-bold py-5'>Contact Us</p>
                        <p>Please contact us for any kind of assistance. We are available every day from 10:00 AM. to 10:00 PM.<br />
                            Service Center Hotline: <span className='font-bold'>09666774577</span>
                            <br />
                            Service Center Email: support@ilyn.global
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

export default ShippingPolicy;