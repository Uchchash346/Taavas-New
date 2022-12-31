import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import '../../assets/css/style.css'


const PhoneAuth = (props) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.phone-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    defaultCountry: "BD"
                },
            ],
            signInSuccessUrl: "http://localhost:3000/",
            privacyPolicy: "/"
        })
    }

    )
    return (
        <div className="phone-auth-container mt-16">
        </div>
    );
};

export default PhoneAuth;