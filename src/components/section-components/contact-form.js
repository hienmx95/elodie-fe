import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm extends Component {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="contact-form text-center padding-top-80 padding-bottom-80">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <form>
			          <div className="form-row">
			            <div className="form-group col-md-6">
			              <input type="text" className="form-control" id="name" placeholder="Họ tên*" />
			            </div>
			            <div className="form-group col-md-6">
			              <input type="number" className="form-control" id="phone" placeholder="SĐT*" />
			            </div>
			          </div>
			          <div className="form-row">
			            <div className="form-group col-md-6">
			              <input type="email" className="form-control" id="email" placeholder="Email*" />
			            </div>
			            <div className="form-group col-md-6">
			              <input type="text" className="form-control" id="topic" placeholder="Chủ đề" />
			            </div>
			          </div>
			          <div className="form-row">
			            <div className="form-group col-md-12">
			              <textarea name="message" id="message" rows={8} placeholder="Nội dung" defaultValue={""} />
			            </div>
			          </div>
			          <button type="submit" className="btn btn-contact">Gửi liên hệ</button>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default ContactForm