import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProduct extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="collection-area margin-top-60">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9 col-md-12">
		        <div className="row">
		          <div className="col-lg-5 col-md-6">
		            <div className="slider-tabfor margin-top-20">
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/p1.png"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/p2.png"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/p3.png"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/p4.png"} alt="" />
		              </div>
		            </div>
		            <div className="slider-tabnav">
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/p1.png" }alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/p2.png" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/p3.png" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/p4.png" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/p1.png" }alt="" />
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-7 col-md-6">
		            <div className="content-part margin-top-20">
		              <h3 className="product-title">Hinoki & Bamboo</h3>
		              <p className="price">7.500.000 ₫</p>
					  <div className="product-tab">
						<div className="tab-content">
							<div id="home" className="tab-pane fade in show active">
								<p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
								<ul className="tab-list">
									<li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
									<li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
								</ul>
							</div>
						</div>
					  </div>
		              <div className="btn-wrapper d-flex">
		                <div className="input-group">
		                  <div className="input-group-prepend align-self-center">
		                    <a className="btn btn-sm" id="minus-btn"><i className="fa fa-minus" /></a>
		                  </div>
		                  <input type="number" id="qty_input" className="form-control text-right form-control-sm" defaultValue={1} min={1} />
		                  <div className="input-group-prepend align-self-center">
		                    <a className="btn btn-sm" id="plus-btn"><i className="fa fa-plus" /></a>
		                  </div>
		                </div>
		                <div className="add-to-cart-style">
		                  <a href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


    )
  }
}

export default SingleProduct;
