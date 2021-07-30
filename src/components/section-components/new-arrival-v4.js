import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewArivalV3 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="tranding-area margin-top-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 new-arivalv4">
              <div className="section-title-02 text-center">
                <img className="logo-resize-110 center-f" src={publicUrl+"assets/img/elodie-logo.svg"} alt="" />
                <h6>SIMPLE. COMFORTABLE. PURPOSEFUL. AMERICAN.</h6>
                <h6>WE MANUFACTURE ALL OF OUR PRODUCTS</h6>
                <h6>IN THE UNITED STATES.</h6>
              </div>
            </div>
            {/* <div className="col-lg-8">
              <ul className="nav nav-pills arrival-tab">
                <li><a data-toggle="pill" href="#one" className="active">NEW IN</a></li>
                <li><a data-toggle="pill" href="#two">MEN</a></li>
                <li><a data-toggle="pill" href="#three">WOMEN</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

        }
}

export default NewArivalV3