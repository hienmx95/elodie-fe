import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SliderV5 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="banner-style-01">     
            <div className="banner-slider">
              <div>
                <div className="height__100vh d-flex align-items-center">
                  <iframe src="https://player.vimeo.com/video/632862296?background=1&autoplay=1&loop=1&mute=1&portrait=0&byline=0&color=" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DSCF6096.MOV"></iframe>
                </div>
              </div>
            </div>
          </div>

        }
}

export default SliderV5