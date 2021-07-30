import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewArivalV3 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="tranding-area margin-top-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-02 text-center">
                <h6>DISCOVER SOMETHING</h6>
                <h3>ALL PRODUCTS</h3>
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