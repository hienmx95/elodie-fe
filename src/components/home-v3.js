import React from 'react';
import NavbarV3 from './global-components/navbar-v3';
import Sliderv3 from './section-components/slider-v3';
import DeliveryV3 from './section-components/delivery-v3';
import NewArrivalV3 from './section-components/new-arrival-v3';
import SaleBannerV2 from './section-components/sale-banner-v2';
import TrendingV2 from './section-components/trending-v2';
import Video from './section-components/video-v2';
import SubscriberV2 from './section-components/subscriber-v2';
import BrandV2 from './section-components/brand-v2';
import LatestArticleV3 from './section-components/latest-article-v3';
import InstagramV3 from './section-components/instagram-v3';
import Footer from './global-components/footer-v2';
import CollectionSliderV2 from './section-components/collection-slider-v2';
import CollectionSliderV3 from './section-components/collection-slider-v3';
import NewArrivalV4 from './section-components/new-arrival-v4';
import Instagram from './section-components/instagram';
const Home_V2 = () => {
    return <div>
        <NavbarV3 />
        <Sliderv3 />
        <DeliveryV3 />
        <NewArrivalV3 />
        {/* <CollectionSliderV3 /> */}
        <CollectionSliderV2 />
        <TrendingV2 />
        <SaleBannerV2 />
        
        <Video />
        {/* <SubscriberV2 /> */}
        {/* <BrandV2 /> */}
        {/* <LatestArticleV3 /> */}
        {/* <Instagram /> */}
        <NewArrivalV4 />
        <Footer customclass="margin-top-80" />
    </div>
}

export default Home_V2

