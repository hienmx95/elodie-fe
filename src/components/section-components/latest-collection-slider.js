import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestCollectionSlider extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="fashion-area margin-top-30 padding-bottom-65">
        <div className="container">
          <div className="fashion-slider">
            <div className="row d-flex">
              <div className="col-md-6">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/fashion/about-img.JPG" }alt="" />
                </div>
              </div>
              <div className="col-md-6 align-self-center text-center">
                <div className="content">
                  <h6>WELCOME TO ÉLODIE'S HOME</h6>
                  <h3>TRUE SELF EVOLVES</h3>
                  <p>Music can touch, scent brings memories and you shine as a candle light. Élodie Chandelle wish to come and share with you all the meaningful moments in live.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  {/* <span className="price">$292</span>
                  <div className="btn-wrapper">
                    <a href="#" className="btn btn-collection" tabIndex={0}><i className="icon-add-to-cat" /> ADD TO CART</a>
                  </div> */}
                </div>
              </div>
            </div>     
          </div>
        </div>
      </div>



        }
}

export default LatestCollectionSlider