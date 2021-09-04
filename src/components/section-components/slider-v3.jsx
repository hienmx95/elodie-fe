import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import audios from "../../audios";
import RecklessImg from "../../images/reckless.jpg";
import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";
import PauseIcon from "../../icons/PauseIcon";
import PlayIcon from "../../icons/PlayIcon";
import "../../audio.scss"
import TimeSlider from "react-input-slider";
export default function SliderV3() {
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

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

  return (<div className="banner-style-03 banner-bg-2 d-flex align-items-center">
            <div className="container-fluid">
              <div className="banner-slider-03">
                <div className="row d-flex">
                  <div className="col-md-7 align-self-center">
                    <div className="content">
                      <h2> Hinoki & Bamboo</h2>
                      <h4>NỒNG NÀN ĐẾN TỪNG PHÚT GIÂY</h4>
                      {/* <iframe src="https://open.spotify.com/embed/track/5ajjAnNRh8bxFvaVHzpPjh" width="270" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                      {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071917788&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}
                      {/* <iframe scrolling="no" width="640" height="180" src="https://zingmp3.vn/embed/song/ZU0WU7CI?start=false" frameborder="0" allowfullscreen="true"/> */}
                      <div className="d-flex">
                        <div className="btn-wrapper stone-go-top ca">
                          <img className="Song-Thumbnail" src={RecklessImg} alt="tet" />
                        </div>
                        <div className="btn-wrapper">
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
                      </div>
                      <audio
                        ref={audioRef}
                        src={audios[audioIndex].src}
                        onLoadedData={handleLoadedData}
                        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                        onEnded={() => setPlay(false)}
                      />
                      <div className="d-flex">
                        <div className="btn-wrapper stone-go-top">
                          <Link className="btn btn-black" to="/collection-full">SHOP NOW</Link>
                        </div>
                        <div className="btn-wrapper">
                          <a className="btn btn-video" href="#"><i className="fa fa-play" /> Play</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/banner/e361ee8882f275ac2ce3-2.jpg"} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-7 align-self-center">
                    <div className="content">
                      <h2> Blooming Orchid</h2>
                      <h4>Songs of spring</h4>
                      <div className="d-flex">
                        <div className="btn-wrapper">
                          <Link className="btn btn-black" to="/collection-full">SHOP NOW</Link>
                        </div>
                        <div className="btn-wrapper stone-go-top">
                          <a className="btn btn-video" href="#"><i className="fa fa-play" /> Play</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/banner/modshow.png"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controler-wrapper">
              <span className="active-controler">01</span> <span className="separator">/</span> <span className="total-controler">02</span>
            </div>
          </div>);
}