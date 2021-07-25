import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

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


        return (
             <footer className="footer-area footer-style-1 padding-top-70 margin-top-70">
              <div className="footer-top padding-bottom-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="widget widget_nav_menu">
                        <h4 className="widget-title">CATEGORIES</h4>
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
                    <div className="col-lg-3 col-md-6">
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
                    <div className="col-lg-4 col-md-6">
                      <div className="widget contact-widget">
                        <h4 className="widget-title">GET IN TOUCH</h4>
                        <ul className="contact_info_list">
                          <li className="single-info-item">
                            <div className="icon">
                              <i className="icon-home-foother" />
                            </div>
                            <div className="details">
                              <span>173 Xuân Thủy<br />Dịch Vọng Hậu<br />Cầu Giấy, Hà Nội</span>
                            </div>
                          </li>
                          <li className="single-info-item">
                            <div className="icon">
                              <i className="icon-email-subscribe" />
                            </div>
                            <div className="details">
                              support@elodie.com.vn
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
                        <h4 className="widget-title">FOLLOW US</h4>
                        <ul>
                          <li><a href="https://www.facebook.com/codingeek"><i className="icon-facebook" /> Facebook</a></li>
                          <li><a href="https://www.twitter.com/codingeek"><i className="icon-twitter" /> Twitter</a></li>
                          <li><a href="https://www.instagram.com/codingeek"><i className="icon-instagram" /> Instagram</a></li>
                          <li><a href="https://www.pinterest.com/codingeek"><i className="icon-pinterest" /> Pinterest</a></li>
                          <li><a href="https://www.youtube.com/codingeek"><i className="icon-youtube" /> Youtube</a></li>
                          <li><a href="https://www.skype.com/codingeek"><i className="icon-skype" /> Skype</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}


export default Footer_v1