import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SliderV3 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="banner-style-03 banner-bg-2 d-flex align-items-center">
            <div className="container-fluid">
              <div className="banner-slider-03">
                <div className="row d-flex">
                  <div className="col-md-7 align-self-center">
                    <div className="content">
                      <h2> Hinoki & Bamboo</h2>
                      <h4>NỒNG NÀN ĐẾN TỪNG PHÚT GIÂY</h4>
                      <iframe src="https://open.spotify.com/embed/track/5ajjAnNRh8bxFvaVHzpPjh" width="270" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>                      <div className="d-flex">
                        <div className="btn-wrapper stone-go-top">
                          <Link className="btn btn-black" to="/collection-full">SHOP NOW</Link>
                        </div>
                        <div className="btn-wrapper">
                          <a className="btn btn-video" href="#"><i className="fa fa-play" /> Play</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/banner/e361ee8882f275ac2ce3-2.jpg"} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-7 align-self-center">
                    <div className="content">
                      <h2> Blooming Orchid</h2>
                      <h4>Songs of spring</h4>
                      <div className="d-flex">
                        <div className="btn-wrapper">
                          <Link className="btn btn-black" to="/collection-full">SHOP NOW</Link>
                        </div>
                        <div className="btn-wrapper stone-go-top">
                          <a className="btn btn-video" href="#"><i className="fa fa-play" /> Play</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/banner/modshow.png"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controler-wrapper">
              <span className="active-controler">01</span> <span className="separator">/</span> <span className="total-controler">02</span>
            </div>
          </div>
          
    }
}

export default SliderV3