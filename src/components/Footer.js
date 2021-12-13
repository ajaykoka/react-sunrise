import React from 'react'
import logo from '../assets/images/logo-white.png'
const Footer = () => {
    return (
        <div>
            <footer>
         <img src={ logo } class="m-auto d-block foot-logo" alt="" />

<div class="location-info">
  <div class="lc-box">
    <p><b>Support</b><br/>
      Our support available to help you 24 hours a day, seven days a week.
      <br />Wednesday - Monday<br/>10:00 am - 07:00 pm. Tuesday: Closed</p>
  </div>
  <div class="lc-box">
    <p><b>Office Address:</b><br/>
      Sunrise Infra Projects,<span class="txt-b" />
        1B, Trendz Jr,Sy No 31 to, 36,
        Vittal Rao Nagar Rd,
        Madhapur, Telangana 500081<br/>
        contact@sunriseinfra.co.in</p>
  </div>
</div>
<div class="btm-footer">
  <p class="m-0">&copy; 2021. All Rights Reserved</p>
</div>
       </footer>
        </div>
    )
}

export default Footer
