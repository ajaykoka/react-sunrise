import React from 'react'

import banner2 from'../assets/images/banner2.jpg'
import bannermob from '../assets/images/banner-mob.jpg'
import logo from '../assets/images/logo-white.png'
import logoM from '../assets/images/logo2.png'


const Slider = () => {
    return (
        <div className="banner">
                <div className="banner-content">
                <img src={ banner2 } className="w-100 d-md-none d-lg-block d-none" alt="" />
                <img src={ bannermob } className="w-100 d-md-block d-lg-none d-block" alt="" />
                <div className="text-cnt">
                        <img src={ logo } className="d-md-none d-lg-block d-none m-auto" alt="" />  
                        <img src={ logoM } className="logo-main d-md-block d-lg-none d-block" alt=""></img>             
                        <span className="d-block text-uppercase text-warning" style={{
                            fontSize: "46px",
                            background: "-webkit-linear-gradient(rgb(255, 246, 162), rgb(255, 236, 127))",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent",
                            marginTop: "100px"
                            }}>Invest in your Future</span>
                        <span className="d-block text-uppercase text-warning" style={{
                            fontSize: "84px",
                            background: "-webkit-linear-gradient(#eee, rgb(255, 221, 27))",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent",
                        }}>Invest in Land. </span>
                </div>
                </div>
            </div>
    )
}

export default Slider
