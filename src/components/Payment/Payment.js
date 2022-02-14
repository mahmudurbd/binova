import React from 'react';
import './Payment.css';
import coming from '../../images/coming.jpg';
const Payment = () => {
    return (
        <div className='payment'>
           <img className='img-fluid' src={coming} alt="" width='600'/> 
        </div>
    );
};

export default Payment;