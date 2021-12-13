import React from 'react'

import logo2 from '../assets/images/logo-white.png'
import loading from "../assets/images/loading.gif"

const Sectionn5 = () => {
    return (
        <div>
            <section className="section-01">
      <div className="wrapper">
      <div className="has-wrap-01">
        
        <div className="img-content">
           <div className="location">
             <div className="loc icon">
              
             </div>
             <div className="location-cnt">
               <span>Location Highlights</span>
               {/* <!-- <p>Sunrise Infra Projects is "Special" </p> --> */}
             </div>
           </div>
           <div>
             <p>
              The Company has a well-trained team in each sphere of its business operations, be it engineering, architecture, layout development, construction, marketing & sales. In the process of growth and change, the company has created a brand name that stands for reliability, high professional standards and long-lasting customer relationships.
             </p>
           </div>
           <div className="row">
             <div className="col">
               <ul className="p-0">
                 <li><i className="v-icon ic-location"></i><span>Near to proposed RRR</span></li>
                 <li><i className="v-icon ic-location"></i><span>Surrounded Zoo Park</span> </li>
                 <li><i className="v-icon ic-location"></i><span>10 minutes drive to Shadnagar </span></li>
                 <li><i className="v-icon ic-location"></i><span>Surrounded by Villas</span></li>
                 <li><i className="v-icon ic-location"></i><span>8 minutes drive to Bangalore Highway</span></li>
                 <li><i className="v-icon ic-location"></i><span>30 minutes drive to ORR</span></li>
                 <li><i className="v-icon ic-location"></i><span>40 minutes drive to Rajiv Gandhi International Airport</span> </li>
                 <li><i className="v-icon ic-location"></i><span>30 minutes drive to Aadibatla </span></li>
                 <li><i className="v-icon ic-location"></i><span>25 minutes drive to Srisailam Highway </span></li>
               </ul>
             </div>
             
           </div>
          
        </div>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-body">
              <img src= { logo2 } alt="" className="d-block m-auto logo" />
              <h2 className="text-center">Enquire Now</h2>
              <form action="" id="formone" method="post" className="popfrm">
                 <div className="inptwidthh validtn">
                    <span className="label_txt"> Full Name   <sub>*</sub></span>
                    <input type="text" className="inponr" name="fname" value="" size="40" aria-required="true" aria-invalid="false" />
                    <span className="errorspan" style={{'color':'red'}}>This field is required</span>
                 </div>
                 <div className="inptwidthh validtn">
                    <span className="label_txt">Email ID <sub>*</sub></span>
                    <input type="email" className="inponr emailinp" name="email" value="" size="40" aria-required="true" aria-invalid="false" />
                    <span className="errorspan" style={{'color':'red'}}>This field is required</span>
                    <span className="erroremailspan" style={{'color':'red'}}>Invalid email</span>
                 </div>
                 <div className="inptwidthh validtn">
                    <span className="label_txt">Phone <sub>*</sub></span><span className="phone p-0">
                    <input type="tel" name="phone" value="" size="25" maxlength="25" minlength="10" className="inponr cphone newfrmnum" aria-required="true"
                       aria-invalid="false" placeholder="" style={{'background': 'no-repeat',
                       'border': 'none'}} />
                    </span>
                    <input name="" readonly />
                    <span className="errorspan" style={{'color':'red', 'text-align': 'left'}}>This field is required</span>
                 </div>
                 <div className="inptwidthh validtn">
                    <span className="label_txt">Whatsapp Number</span><span className="phone p-0">
                    <input type="tel" name="whatsapp" value="" size="25" maxlength="25" minlength="10" className="inponr cphone newfrmnum" aria-required="false"
                    aria-invalid="false" placeholder="" style={{'background': 'no-repeat',
                       'border': 'none'}} />
                    </span>
                    <input name="" readonly />
                    <span className="errorspan" style={{'color':'red', 'text-align': 'left'}}>This field is required</span>
                 </div>
                 <div className="inptwidthh validtn">
                  <span className="label_txt"> Preferred Location</span>
                  <input type="text" className="inponr" name="plocation" value="" size="40" aria-required="false" aria-invalid="false" />
                  
               </div>
                 <div className="d-none">
                    <input type="hidden" name="utm_medium" className="utmmedium" />
                    <input type="hidden" name="utm_source" className="utmsource" />
                    <input type="hidden" name="utm_campaign" className="utmcampaign" />
                    <input type="hidden" name="utm_term" className="utmterm" />
                    <input type="hidden" name="utm_content" className="utmcontent" />
                    <input type="hidden" name="date" id="submission_date" />
                    <input type="hidden" name="Time" id="submission_time" />
                    <input type="hidden" name="month" id="submission_month" />
                    <input type="hidden" name="page_url" id="page_url" />
                    <input type="hidden" name="top_subj" value="Enquire Now"/>
                    <input type="hidden" name="subj" value="Enquire Now" />
                    <input type="checkbox" name="contact_me" value="1" style={{'display':'none !important'}} tabindex="-1" autocomplete="off" />
                    <input type="hidden" name="type" id="type" value="Leadgen" />
                 </div>
                 <div className="popbtn">
                    <input type="submit" value="Submit" onclick="onsubmitform(event)" />
                 
                 </div>
                 <div className="lodingsect">
                    <img src={ loading } alt="" />
                 </div>
              </form>
           </div>
          </div>
          
        </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Sectionn5
