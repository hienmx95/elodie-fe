import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionSlider extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-banner margin-bottom-120 stone-go-top">
          <div className="container">
            <div className="row collection-slider-03">
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/leyla.JPG"} alt="" />
                  </div>
                  <div className="content">
                    <h3>Leyla</h3>
                    <div className="btn-wrapper">
                      <Link to="/product/leyla" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="content">
                    <h3>Blossom</h3>
                    <div className="btn-wrapper">
                      <Link to="/product/blossom" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/Blossom.JPG"} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/St. Honore.JPG"} alt="" />
                  </div>
                  <div className="content">
                    <h3>St. Honore</h3>
                    <div className="btn-wrapper">
                      <Link to="/product/st-honore" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default CollectionSlider