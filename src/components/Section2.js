import React from 'react'

import image1 from '../assets/images/01.jpg'
import image2 from '../assets/images/02.jpg'
import image3 from '../assets/images/03.jpg'
import image4 from '../assets/images/04.jpg'

const Section2 = () => {
    return (
        <div>
            <section className="section-04">
                <h2 className="m-0 text-center">High Quality Plots For Sale In Hyderabad
                </h2>
                <small className="text-center">Whether it’s plots for sale in Hyderabad or nearby areas, Sunrise Infra Projects scores high in all aspects. Speaking of high quality, the company outscores itself by ensuring unmatched excellence.</small>
                <span className="link-btn m-auto" data-bs-toggle="modal" data-bs-target="#modal">Contact us</span>
                <div className="img-wrap">
                <div className="img-box">
                    <img src={ image1 } className="w-100" alt="" />
                    <div className="img-box-txt">
                        <h3>60’&40′ & 30′ BT Roads</h3>
                        <p>Guaranteed land value appreciation 
                            because of the location advantage, future expansions and rising demands.
                        </p>
                    </div>
                </div>
                <div className="img-box">
                    <img src={ image2 } className="w-100" alt="" />
                    <div className="img-box-txt">
                        <h3>Ready for Construction</h3>
                        <p>All the plots are ready to be constructed following regulations</p>
                    </div>
                </div>
                <div className="img-box">
                    <img src={ image3 } className="w-100" alt="" />
                    <div className="img-box-txt">
                        <h3>Children’s Park</h3>
                        <p>The Children's Park  is a special place to celebrate the lives of all children,
                        We work together to make the park a fun and happy place for children to come and play</p>
                    </div>
                </div>
                <div className="img-box">
                    <img src={ image4 } className="w-100" alt="" />
                    <div className="img-box-txt">
                        <h3>Electricity</h3>
                        <p>Sunrise Infra Projects team believes in creating architectural styles that blend in with the dynamics of the site</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
