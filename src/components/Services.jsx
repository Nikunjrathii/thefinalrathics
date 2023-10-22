import React, { useEffect } from 'react'
import "./Servicees.css";
import webdevlogo from '../assest/webdevlogo.png'
import softdevlogo from '../assest/softdevlogo.png'
import developlogo from '../assest/developlogo.png'
import digitalmarket from '../assest/digitalmarketlogo.png'
const Services = () => {
	useEffect(() => {
		document.title = 'Services';
	  }, []);
  return (
    
      <div className="container-fluid">
        <div class="row it-services feat bg-gray pt-5 pb-5" style={{marginLeft:'10vw'}}>
           <div className="container1">
            <div className="row">
            <div class="section-head col-sm-12">
		          <h4><span>
Our Area of Expertise</span></h4>
		          <p>Tailored IT services and solutions crafted exclusively to meet the unique needs of your business</p>
		        </div>
            
            <div class="col-md-6"style={{marginBottom:'3vw'}}>
		          <div class="item content d-flex justify-content-center">
		              <div class="content-overlay"></div>

		              <div class="img-with-tital align-self-center">
		              	<img src={webdevlogo} width="100" class="img-fluid"/>
		                <h4>Web Design & Development</h4>
		              </div>
    		          <div class="content-details fadeIn-bottom d-flex">
	    		          <div class="service-hover-content align-self-center">
	    		          	<img src="https://www.clarigoinfotech.com/assets/images/icons/android-deve-white.png" width="70" class="img-fluid"/>
	    		            <h6>Web Design & Development</h6>
	    		           
	                    </div>
                    </div>
		          </div>
		        </div>
            <div class="col-md-6" style={{marginBottom:'3vw'}}>
		          <div class="item content d-flex justify-content-center">
		              <div class="content-overlay"></div>

		              <div class="img-with-tital align-self-center">
		              	<img src={softdevlogo} width="100" class="img-fluid"/>
		                <h4>Software Development</h4>
		              </div>
    		          <div class="content-details fadeIn-bottom d-flex">
	    		          <div class="service-hover-content align-self-center">
	    		          
	    		            <h6>Software Development</h6>
	    		         
	                    </div>
                    </div>
		          </div>
		        </div>
            <div class="col-md-6" >
		          <div class="item content d-flex justify-content-center">
		              <div class="content-overlay"></div>

		              <div class="img-with-tital align-self-center">
		              	<img src={developlogo} width="100" class="img-fluid"/>
		                <h4>Mern Stack Development</h4>
		              </div>
    		        
		          </div>
		        </div>
		        <div class="col-md-6">
		          <div class="item content d-flex justify-content-center">
		              <div class="content-overlay"></div>

		              <div class="img-with-tital align-self-center">
		              	<img src={digitalmarket} width="100" class="img-fluid"/>
		                <h4>Digital Marketing</h4>
		              </div>
    		         
		          </div>
		        </div>
            </div>
            
           </div>
        </div>
      </div>
      
    
  )
}

export default Services
