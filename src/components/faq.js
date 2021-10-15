import React from 'react';
import Navbar from './global-components/navbar';
import NavbarV3 from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import FooterV2 from '../components/global-components/footer-v2';
const ProductDetails = () => {
    return <div>
        <NavbarV2 />
        <FaqSection />
        <Instagram />
        <FooterV2 />
    </div>
}

export default ProductDetails

