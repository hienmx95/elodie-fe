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
                <div className="col-lg-3 col-md-6 padding-bottom-30">
                <div className="widget contact-widget">
                    <h4 className="widget-title">SIGN UP TO RECEIVE 15% OFF</h4>
                  </div>
                  <div class="newsletter__wrap footer-newsletter__wrap input-placeholder js-field-group">
                      <div class="form-inline__input input-placeholder">
                          <label class="newsletter__label newsletter__label footer-newsletter__label" for="footerNewsletterInput">
                              email
                          </label>
                          <input id="footerNewsletterInput" class="input newsletter__input footer-newsletter__input js-email" name="email" type="email" value="" required="" />
                      </div>
                      <button id="footerNewsletterSubmit" class="form-inline__btn newsletter__btn footer-newsletter__btn" type="submit">
                          <span class="btn__label">
                              <span class="icon icon--right-arrow"></span>
                          </span>
                      </button>
                  </div>
                </div>
                <div className="col-lg-1 col-md-6 offset-lg-1">
                  
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4 className="widget-title">CONTACT</h4>
                   	 <ul className="stone-go-top">
                          <li className="widget-title"><Link to="/collection"><i className="icon-home-foother" />173 XUÂN THỦY, CẦU GIẤY, HN</Link></li>
                          <li className="widget-title"><Link to="/contact"><i className="icon-call-footer" />0986279928</Link></li>
                        </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4 className="widget-title">INFORMATION</h4>
                    <ul className="stone-go-top">
                          <li><Link to="/collection">TIPS</Link></li>
                          <li><Link to="/collection-list">FAQ</Link></li>
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


export default Footer_v2