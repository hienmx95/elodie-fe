import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div>
			  <div className="mapouter">
			    <div className="gmap_canvas">
				<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=173%20Xu%C3%A2n%20Th%E1%BB%A7y+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
			    </div>
			  </div>
			  {/* contact area start  */}
			  <div className="contact-info margin-top-80">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-12">
			          <div className="section-title text-center">
			            <h3>CONTACT US FOR ANY QUARY</h3>
			          </div>
			        </div>
			      </div>
			      <div className="row">
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="icon-call-header" />
			            </div>
			            <a href="tel:+12345678910">(+84)0986-279-928</a><br />
			            <a href="tel:+12345678911">(+84)0969-781-710</a><br />
			            <span>Mobile</span>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="fa fa-envelope-open" />
			            </div>
			            <a href="#">linhhajc@gmail.com</a><br />
			            <a href="#">support@elodie.com.vn</a><br />
			            <span>Email</span>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="fa fa-map-marker" />
			            </div>
			            <span>
			              173 Xuân Thủy, Dịch Vọng Hậu <br />Cầu Giấy, Hà Nội<br /> Address
			            </span>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* contact area end  */}
			</div>

        }
}

export default ContactInfo