import React from 'react'

import view from '../assets/images/view.jpg'

const Section1 = () => {
    return (
            <div>
                <section className="section-01">
            <div className="wrapper">
            <div className="has-wrap-01">
                
                <div className="img-content">
                    <div className="location">
                    <div className="loc v-icon">
                    
                    </div>
                    <div className="location-cnt">
                        <span>When it comes to Real Estate in Hyderabad</span>
                        <p>Sunrise Infra Projects is "Special" </p>
                    </div>
                    </div>
                    <div>
                    <p>Sunrise Infra Projects team believes in creating architectural styles that blend in with the dynamics of the site –  the reason why the company’s projects never fails to set the scene for the art of fine living.
                    </p>
                    </div>
                    <div className="row">
                    <div className="col">
                        <ul className="p-0">
                        <li><i className="v-icon ic-location"></i><span>DTCP approved</span></li>
                        <li><i className="v-icon ic-location"></i><span>LP approved </span> </li>
                        <li><i className="v-icon ic-location"></i><span>Spot registration </span></li>
                        <li><i className="v-icon ic-location"></i><span>Bank loan available</span></li>
                        <li><i className="v-icon ic-location"></i><span>24 hours security</span></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="p-0">
                        <li><i className="v-icon ic-location"></i><span>Electricity with street lights</span></li>
                        <li><i className="v-icon ic-location"></i><span>Water lines</span> </li>
                        <li><i className="v-icon ic-location"></i><span>Under ground drainage </span></li>
                        <li><i className="v-icon ic-location"></i><span>Compound wall</span></li>
                        <li><i className="v-icon ic-location"></i><span>Park development</span></li>
                        </ul>
                    </div>
                    </div>
                    <span className="link-btn" data-bs-toggle="modal" data-bs-target="#modal">Contact us</span>
                </div>
                <div className="img-bg">
                <img src={ view } className="w-100 d-md-block d-lg-none d-block" alt="" />
                <div className="img-block d-md-none d-lg-block d-none">
                    
                </div>
            </div>
            </div>
            </div>
        </section> 

        </div>
            )
}

export default Section1
