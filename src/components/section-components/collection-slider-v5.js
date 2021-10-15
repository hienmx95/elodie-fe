import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionSlider extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-banner margin-bottom-120 stone-go-top">
          <div className="container">
            <div className="row collection-slider-about">
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/joyful-2.jpg"} alt="" />
                  </div>
                  <div className="content">
                    <h3>Joyful</h3>
                    <div className="btn-wrapper">
                      <p>Élodie finds love in every moment of life and put this love into scented candles. We belive that candle light and special scent will bring you joy and happiness. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="content">
                    <h3>Optimistic</h3>
                    <div className="btn-wrapper">
                      <p>Everything happens for a reason and a purpose, it serves you. You just need to love your true self. Hence, Élodie is always beside you to take care and enjoy life.</p>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/optimistic.jpg"} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/comfy-2.JPG"} alt="" />
                  </div>
                  <div className="content">
                    <h3>Comfy</h3>
                    <div className="btn-wrapper">
                      <p>With high qualified ingredients, Élodie's items are made to help you feel at ease around. We try our best to creat products that are safe and sound. </p>
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