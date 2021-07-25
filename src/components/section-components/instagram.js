import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Instagram extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="instagram-area margin-top-75">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="instagram-title margin-bottom-40">
              <h4><span>@ <a href="#">FOLLOW</a></span> US ON INSTAGRAM</h4>
              <h6>shop our instagram</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="instagram-slider">
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/saint-candle.png" }alt="" />
              </div>
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/book.png" }alt="" />
              </div>
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/falling-in-love.png"} alt="" />
              </div>
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/rot.png"} alt="" />
              </div>
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/black-dahlia.png"} alt="" />
              </div>
              <div className="thumb">
                <img src={publicUrl+"assets/img/instagram/natural-coconut.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


        }
}

export default Instagram