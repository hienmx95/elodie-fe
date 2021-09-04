import React, {useState, useRef, useEffect } from 'react';
import NavbarV3 from '../components/global-components/navbar-v3';
import Footer from '../components/global-components/footer-v2';
import Sliderv3 from '../components/section-components/slider-v3';
import DeliveryV3 from '../components/section-components/delivery-v3';
import NewArrivalV3 from '../components/section-components/new-arrival-v3';
import CollectionSliderV2 from '../components/section-components/collection-slider-v2';
import TrendingV2 from '../components/section-components/trending-v2';
import SaleBannerV2 from '../components/section-components/sale-banner-v2';
import Video from '../components/section-components/video-v2';
import Instagram from '../components/section-components/instagram';
import NewArrivalV4 from '../components/section-components/new-arrival-v4';
import RecklessImg from "../images/reckless.jpg";
import PrevIcon from "../icons/PrevIcon";
import NextIcon from "../icons/NextIcon";
import PauseIcon from "../icons/PauseIcon";
import PlayIcon from "../icons/PlayIcon";
import audios from "../audios";
// import "../audio-home.scss";
import "../audio-home.scss";
export default function Home() {
    
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
        <>
            <NavbarV3 />
            <Sliderv3 />
            <DeliveryV3 />
            <NewArrivalV3 />
            <CollectionSliderV2 />
            <TrendingV2 />
            <SaleBannerV2 />
            <Video />
            <Instagram />
            <NewArrivalV4 />
            <Footer customclass="margin-top-80" />

            {/* <div className="dvd-play">
                <img className="Song-Thumbnail-1" src={RecklessImg} alt="tet" />
                <div className="Control-Button-Group-1">
                  <div className="Pause-Play-Button-1" onClick={handlePausePlayClick}>
                    {isPlay ? <PauseIcon /> : <PlayIcon />}
                  </div>
                </div>
            </div>
            <audio
              ref={audioRef}
              src={audios[audioIndex].src}
              onLoadedData={handleLoadedData}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
              onEnded={() => setPlay(false)}
            /> */}
        </>
    );
}