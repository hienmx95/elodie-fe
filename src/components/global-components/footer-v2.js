import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        let customclass = this.props.customclass ? this.props.customclass : ''


        return (
          <footer className={"footer-area footer-style-2 padding-top-80 "+customclass}>
          <div className="footer-top padding-bottom-50">
            <div className="container">
              <div className="row">
            
                <div className="col-lg-4 col-md-6 offset-lg-1">
                  <div className="widget contact-widget">
                    <h4 className="widget-title">GET IN TOUCH</h4>
                    <ul className="contact_info_list">
                      <li className="single-info-item">
                        <div className="icon">
                          <i className="icon-home-foother" />
                        </div>
                        <div className="details">
                          <span>Tòa nhà Pico<br />173 Xuân Thủy, Dịch Vọng Hậu <br />Cầu Giây, Hà Nội</span>
                        </div>
                      </li>
                      <li className="single-info-item">
                        <div className="icon">
                          <i className="icon-email-subscribe" />
                        </div>
                        <div className="details">
                          linhhajc@gmail.com
                        </div>
                      </li>
                      <li className="single-info-item">
                        <div className="icon">
                          <i className="icon-call-footer" />
                        </div>
                        <div className="details">
                          <a href="tel:+496170961709">(+84) 0986-279-928, (+84) 0969-781-710</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4 className="widget-title">OUR POLICY</h4>
                   	 <ul className="stone-go-top">
                          <li><Link to="/collection">Brands</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/blog-details">Blog details</Link></li>
                          <li><Link to="/comming-soon">Comming Soon</Link></li>
                          <li><Link to="/collection-full">Shop</Link></li>
                        </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4 className="widget-title">INFORMATION</h4>
                    <ul className="stone-go-top">
                          <li><Link to="/collection">Clothing</Link></li>
                          <li><Link to="/collection-list">Accessories</Link></li>
                          <li><Link to="/collection-full">Women</Link></li>
                          <li><Link to="/collection-list">Men</Link></li>
                          <li><Link to="/collection-full">Shoes</Link></li>
                          <li><Link to="/collection">New Arrivals</Link></li>
                          <li><Link to="/collection-list">Clearance</Link></li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <p>© Stoon 2020. Powered with <i className="fa fa-heart" /> by <a href="#">Codingeek</a>.</p>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/1.png"} alt="" /></a></li>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/2.png"} alt="" /></a></li>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/3.png"} alt="" /></a></li>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/4.png"} alt="" /></a></li>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/5.png"} alt="" /></a></li>
                    <li><a href="#"><img src={publicUrl+"assets/img/payment/6.png"} alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>



        )
    }
}


export default Footer_v2