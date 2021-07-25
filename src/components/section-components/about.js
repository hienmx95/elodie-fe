import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="about-content margin-top-80">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="content-left">
			          <h3>Hương thơm của sự thanh thoát &amp; Chúng tôi mang hạnh phúc đến cho bạn</h3>
			          <p>Chúng ta không thể thay đổi tình hình hiện tại. Nhưng chúng ta có thể thay đổi cách suy nghĩ để tận hưởng nó. <br /><br />Người không quan tâm đến tôi, bạn dựa vào cái gì mà bảo tôi phải tiếp Người ta nghĩ sao về bạn, không có liên quan gì đến bạn. Bạn sống thế nào, cũng không có liên quan gì đến người ta.</p>
			          <span>Moin Khan</span>
			        </div>
			      </div>
			      <div className="col-lg-7">
			        <div className="thumb">
			          <img src={publicUrl+"assets/img/others/393d34101157607.5f1f7df1d52c5.jpg" }alt="" />
			          {/* video button */}
			          <div className="video-btn-style-01">
			            <a href="#"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default About