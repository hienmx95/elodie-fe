import React from 'react';
import NavbarV3 from '../components/global-components/navbar-v3';
import NavbarV5 from '../components/global-components/navbar-v5';
import Footer from '../components/global-components/footer-v2';
import Sliderv3 from '../components/section-components/slider-v3';
import Sliderv5 from '../components/section-components/slider-v5';
import DeliveryV3 from '../components/section-components/delivery-v3';
import NewArrivalV3 from '../components/section-components/new-arrival-v3';
import CollectionSliderV2 from '../components/section-components/collection-slider-v2';
import TrendingV2 from '../components/section-components/trending-v2';
import SaleBannerV2 from '../components/section-components/sale-banner-v2';
import Video from '../components/section-components/video-v2';
import Instagram from '../components/section-components/instagram';
import NewArrivalV4 from '../components/section-components/new-arrival-v4';
import HomeV5 from '../components/home-v5';
// import "../audio-home.scss";
import "../audio-home.scss";
export default function Home() {
    return (
        <>
            <NavbarV5 />
            <Sliderv5 />
            {/* <NavbarV3 /> 
            <Sliderv3 /> */}
            <DeliveryV3 />
            <NewArrivalV3 />
            <CollectionSliderV2 />
            <TrendingV2 />
            <SaleBannerV2 />
            <Video />
            <Instagram />
            <NewArrivalV4 />
            <Footer customclass="margin-top-80" />
        </>
    );
}