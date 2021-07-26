import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class RelatedProduct extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="related-product-section">
		  <div className="container">
		    <div className="related-product">
		      <div className="row">
		        <div className="col-lg-12">
		          <div className="title">
		            <h2>YOU MAY ALSO LIKE</h2>
		          </div>
		        </div>
		      </div>
		      <div className="row">
		        <div className="col-lg-12">
		          <div className="related-slider">
					  
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/r1.png"} alt="" />
		                <span className="new">New</span>
		              </div>
		              <div className="content text-center">
		                <h6 className="title stone-go-top"><Link to="/product-details"> Blooming orchid</Link></h6>
		                <span className="price">7.500.000 ₫</span>
		              </div>
		            </div>

					<div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/r1.png"} alt="" />
		                <span className="new">New</span>
		              </div>
		              <div className="content text-center">
		                <h6 className="title stone-go-top"><Link to="/product-details"> Blooming orchid</Link></h6>
		                <span className="price">7.500.000 ₫</span>
		              </div>
		            </div>

					<div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/r1.png"} alt="" />
		                <span className="new">New</span>
		              </div>
		              <div className="content text-center">
		                <h6 className="title stone-go-top"><Link to="/product-details"> Blooming orchid</Link></h6>
		                <span className="price">7.500.000 ₫</span>
		              </div>
		            </div>

					<div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/r1.png"} alt="" />
		                <span className="new">New</span>
		              </div>
		              <div className="content text-center">
		                <h6 className="title stone-go-top"><Link to="/product-details"> Blooming orchid</Link></h6>
		                <span className="price">7.500.000 ₫</span>
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

export default RelatedProduct;
