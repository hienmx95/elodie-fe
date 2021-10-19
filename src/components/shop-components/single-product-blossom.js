import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import audios from "../../audios/blossom-audio";
import RecklessImg from "../../images/moon-river.jpg";
import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";
import PauseIcon from "../../icons/PauseIcon";
import PlayIcon from "../../icons/PlayIcon";
import "../../audio.scss"
import TimeSlider from "react-input-slider";

export default function SingleProduct(){
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(true);
  
	const handleLoadedData = () => {
	  setDuration(audioRef.current.duration);
	  if (isPlay) audioRef.current.play();
	};
  
	useEffect(() => {
	  if (isPlay) {
		audioRef.current.play();
	  }
	}, [isPlay]);
  
	const handlePausePlayClick = () => {
	  if (isPlay) {
		audioRef.current.pause();
	  } else {
		audioRef.current.play();
	  }
	  setPlay(!isPlay);
	};
  
	const handleTimeSliderChange = ({ x }) => {
	  audioRef.current.currentTime = x;
	  setCurrentTime(x);
  
	  if (!isPlay) {
		setPlay(true);
		audioRef.current.play();
	  }
	};
    return (
      <div className="collection-area wrapper">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12 col-md-12">
		        <div className="row">
		          <div className="col-lg-7 col-md-6">
		            <div className="slider-tabfor margin-top-20">
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/blossom-detail-1.JPG"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/blossom-detail-2.JPG"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/blossom-detail-3.JPG"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/blossom-detail-4.JPG"} alt="" />
		              </div>
					  <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/blossom-detail-5.JPG"} alt="" />
		              </div>
		            </div>
		            <div className="slider-tabnav">
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/blossom-detail-1.JPG" }alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/blossom-detail-2.JPG" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/blossom-detail-3.JPG" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/blossom-detail-4.JPG" }alt="" />
		                </div>
		              </div>
					  <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/blossom-detail-5.JPG" }alt="" />
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-5 col-md-6">
		            <div className="content-part margin-top-50">
					  <h1 class="product_name title">BLOSSOM</h1>
					  <div class="description content has-padding-top">
						  <p class="product-page__tagline">LUXURY SCENTED CANDLE</p>
						  <p class="p1">Hương thơm nhẹ nhàng của phong lan rừng và gỗ đàn hương với 1 chút chua chua của gỗ gụ và hoa chanh lan tỏa trong không gian như mang cả khu rừng nhỏ vào nhà bạn.</p>
					  </div>
					  <div class="product-form-container product-page">
						<div class="flex_container_own">
							{/* <div class="product_weight">
								<p>340g /  60 hours</p>
							</div> */}
							<div class="product_price">
								<p class="modal_price subtitle">
									<span class="money">360,000₫</span>
								</p>
							</div>
						</div>
						<div class="purchase-details ">
							<div className="add-to-cart-style">
							<a href="#" id="search">Buy it Now</a>
							</div>
						</div>
						<div class="so-accordion-wrapper">
							<div class="so-tab">
							    <input id="so-tab-1" type="checkbox" name="tabs" />
								<label for="so-tab-1">NOTES</label>
								<div class="so-tab-content 1">
									<p>
										<p data-mce-fragment="1">
											Mùi hương: Hoa phong lan rừng
										</p>
									</p>
								</div>
							</div>
							<div class="so-tab">
							    <input id="so-tab-2" type="checkbox" name="tabs" />
								<label for="so-tab-2">INSIDE INFORMATION</label>
								<div class="so-tab-content 2">
									<p>
										<p data-mce-fragment="2">
											Trọng lượng: 60oz
										</p>
										<p>Sáp dừa 100% thiên nhiên</p>
										<p>Giờ đốt tối thiểu: 30 giờ</p>
										<p>Tinh dầu nhập khẩu</p>
									</p>
								</div>
							</div>
							<div class="so-tab">
							    <input id="so-tab-3" type="checkbox" name="tabs" />
								<label for="so-tab-3">CANDLE ETIQUETTE</label>
								<div class="so-tab-content 3">
									<p>
										Mỗi lần đốt khoảng 2-3 tiếng để sáp tan đều. Hãy chắc chắn cắt bấc sau mỗi lần sử dụng.
									</p>
								</div>
							</div>
						</div>
						<div className="d-flex music-product">
							<div className="btn-wrapper stone-go-top ca">
							<img className="Song-Thumbnail" src={RecklessImg} alt="tet" />
							</div>
							<div className="btn-wrapper-u">
							<p className="Singer">{audios[audioIndex].title}</p>
							<div className="Control-Button-Group">
								<div
									className="Prev-Button"
									onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
								>
									<PrevIcon />
								</div>
								<div className="Pause-Play-Button" onClick={handlePausePlayClick}>
									{isPlay ? <PauseIcon /> : <PlayIcon />}
								</div>
								<div
									className="Next-Button"
									onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
								>
									<NextIcon />
								</div>
							</div>
							<TimeSlider
								axis="x"
								xmax={duration}
								x={currentTime}
								onChange={handleTimeSliderChange}
								styles={{
								track: {
									backgroundColor: "#e3e3e3",
									height: "2px",
								},
								active: {
									backgroundColor: "#333",
									height: "2px",
								},
								thumb: {
									marginTop: "-3px",
									width: "8px",
									height: "8px",
									backgroundColor: "#333",
									borderRadius: 0,
								},
								}}
							/>
							</div>
							<audio
								ref={audioRef}
								src={audios[audioIndex].src}
								onLoadedData={handleLoadedData}
								onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
								onEnded={() => setPlay(false)}
							/>
                    	</div>
					  </div>
					  {/* <div className="product-tab">
						<div className="tab-content">
							<div id="home" className="tab-pane fade in show active">
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
					  </div> */}
		              {/* <div className="btn-wrapper d-flex">
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
		              </div> */}
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


    )
  }
