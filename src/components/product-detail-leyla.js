import React from 'react';
import Navbar from './global-components/navbar';
import NavbarV3 from './global-components/navbar-v3';
import NavbarV2 from './global-components/navbar-v2';
import NavbarV4 from './global-components/navbar-v4';
import NavbarV5 from './global-components/navbar-v5';
import PageHeader from './global-components/page-header-product-detail';
import SingleProductLeyla from './shop-components/single-product-layla';
import RelatedProduct from './shop-components/related-product-leyla';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import FooterV2 from './global-components/footer-v2';
import CollectionBannerV4 from './section-components/collection-banner-v4';
import CollectionBanner from './section-components/collection-banner';

const ProductDetailLeyla = () => {
    return <div>
        <NavbarV2 />
        {/* <PageHeader headertitle="Shop" subheader="Product Details" /> */}
        <SingleProductLeyla />
        <RelatedProduct />
        <Instagram />
        <FooterV2 />
    </div>
}

export default ProductDetailLeyla

