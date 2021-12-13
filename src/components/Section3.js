import React from 'react'

import image1 from '../assets/images/05.jpg'
import image2 from '../assets/images/06.jpg'
import image3 from '../assets/images/07.jpg'
import image4 from '../assets/images/08.jpg'

const Section3 = () => {
    return (
        <div>
            <section className="section-04">
            <h2 className="m-0 text-center">
                Don't wait to buy a Land,
                Buy a Land and Wait
            </h2>
            <small className="text-center">When it comes to Real Estate in Hyderabad Sunrise Infra Projects is special</small>
            <span className="link-btn m-auto" data-bs-toggle="modal" data-bs-target="#modal">Contact us</span>
            <div className="img-wrap">
                <div className="img-box">
        <img src={ image1 } className="w-100" alt="" />
        <div className="img-box-txt">
        <h3>Avenue Plantation</h3>
        <p>Especially on busy roads and in densely populated regions, tree-lined avenues play a highly useful role, filtering dust and exhaust gases from the air and pollutants from the groundwater.
            </p>
        </div>
                </div>
                <div className="img-box">
                <img src= { image2 } className="w-100" alt="" />
                <div className="img-box-txt">
                <h3>Overhead Water Tank</h3>
                <p>Water storage is one of the primary matters that are taken into consideration while constructing an apartment or house.</p>
                    </div>
                
                        </div>
                        <div className="img-box">
                        <img src={ image3 } className="w-100" alt="" />
                        <div className="img-box-txt">
                        <h3>Underground Drainage</h3>
                        <p>The underground drainage system ensures that wastewater is flushed out of the site which further reduces the risk of contamination of water
                            </p>
                            </div>
                        
                                </div>
                                <div className="img-box">
                                <img src={ image4 } className="w-100" alt="" />
                                <div className="img-box-txt">
                                <h3>100% Vaastu</h3>
                                <p>Sunrise Infra Projects team believes in creating architectural styles that blend in with the dynamics of the site

                                </p>
                                </div>
                        
                                
                                        </div>
            </div>
     </section>
        </div>
    )
}

export default Section3
