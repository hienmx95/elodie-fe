import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TrendingV2 extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="arrivals-area margin-top-75">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3>SPRING SALES</h3>
                </div>
              </div>
            {/* <div className="col-lg-8">
              <ul className="nav nav-pills collection-tab-02">
                <li><a data-toggle="pill" href="#hot" className="active">All</a></li>
                <li><a data-toggle="pill" href="#best">Women</a></li>
                <li><a data-toggle="pill" href="#sale">Man</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

        }
}

export default TrendingV2