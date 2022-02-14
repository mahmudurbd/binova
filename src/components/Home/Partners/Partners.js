import React from 'react';
import './Partners.css';

const Partners = () => {
    return (
        <div className='partners py-5'>
            <div class="row row-cols-2 row-cols-sm-4 row-cols-md-6 row-cols-lg-6 g-4">
                <div className="col">
                    <img src="https://i.ibb.co/FmVPTHR/partner-1.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="https://i.ibb.co/M6qPLTv/partner-2.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="https://i.ibb.co/xqK3sxZ/partner-3jpg.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="https://i.ibb.co/GQ1K3Rb/partner-4.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="https://i.ibb.co/QXjjNHH/partner-5.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="https://i.ibb.co/L6KPv5T/partner-6.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;