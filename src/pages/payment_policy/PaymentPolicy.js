import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));

const PaymentPolicy = () => {
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <Fragment>
                <div className='flex mx-auto container pt-16 h-full'>
                    <div className='w-1/6 pt-5'>
                        <Sidebar />
                    </div>
                    <div className='w-5/6'>
                        {/* <p className='text-justify'></p> */}
                        <p className='text-justify'>
                            To begin purchasing from the site (www.ilyn.global) or platform, you may be required to register using a valid phone number and password. It is your sole responsibility to keep such information/log-in details secure. We shall not be held responsible if such information/log-in details are provided to a third party by the customer or if any third party receives the same due to the negligence of the customer and for any loss incurred as a result of the above-mentioned incidents (unauthorized access to data).
                        </p>
                        <p>There are two types of payment options:</p>
                        <ul>
                            <ol>Cash on Delivery</ol>
                            <ol>Online Payment</ol>
                        </ul>
                        <p>
                            <span className='font-bold'>Cash on delivery: </span>If the delivery location is inside Dhaka, our delivery agent will collect the cash after delivering the ordered product(s). For deliveries outside Dhaka, the customer has to pay the due amount to the courier service before collecting the product(s).
                            <br />
                            <span className='font-bold'>Online payment options: </span>You can make payments using Visa Card, MasterCard, American Express (AMEX), CityTouch, DBBL Nexus, BRAC Bank, bKash, Nagad, Rocket, Sure Cash, Fast Cash, Tap’n Pay, T-Cash, Upay, MyCash, IBBL MCash, Q-Cash, Bank Asia, IBBL, AB Bank, MTB, OK Wallet, Dmoney and UnionPay.
                        </p>
                        <p className='font-bold py-5'>Are there any International Payment methods?</p>
                        <p>Yes, you can pay using MasterCard, VISA and American Express (AMEX). Please note, you will be asked for proof of identity.</p>

                        <p className='font-bold py-5'>Are there any hidden charges?</p>
                        <p>Yes, you can pay using MasterCard, VISA and American Express (AMEX). Please note, you will be asked for proof of identity.</p>

                        <p className='font-bold py-5'>Will my information related to payment be secured?</p>
                        <p>Rest assured, we ensure the safety of your sensitive information. However, we do not retain card information to comply with regulatory guidelines. All information related to your card/bank account will be exclusively dealt with by the payment gateway. We will ensure that the 2FA (Two Factor Authentication) is verified for payment.</p>
                    </div>
                </div>
                <div className='py-10'>
                    <DisplayCenter />
                </div>
            </Fragment>
        </Suspense>
    );
};

export default PaymentPolicy;