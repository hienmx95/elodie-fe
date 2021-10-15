import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutWithVideo from './section-components/about';
import Team from './section-components/team';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import FooterV2 from '../components/global-components/footer-v2';
import CollectionSliderV2 from '../components/section-components/collection-slider-v2';
import CollectionSliderV3 from '../components/section-components/collection-slider-v3';
import CollectionSlider5 from '../components/section-components/collection-slider-v5';
import LatestCollectionSlider from './section-components/latest-collection-slider';
const About = () => {
    return <div>
        <NavbarV2 />
        {/* <AboutWithVideo /> */}
        {/* <Team /> */}
        <LatestCollectionSlider />
        <CollectionSlider5 />
        <Instagram />
        <FooterV2 />
    </div>
}

export default About

