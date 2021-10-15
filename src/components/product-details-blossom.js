import React from 'react';
import Navbar from './global-components/navbar';
import NavbarV3 from './global-components/navbar-v3';
import NavbarV2 from './global-components/navbar-v2';
import NavbarV4 from './global-components/navbar-v4';
import NavbarV5 from './global-components/navbar-v5';
import PageHeader from './global-components/page-header-product-detail';
import SingleProductBlossom from './shop-components/single-product-blossom';
import RelatedProduct from './shop-components/related-product-blossom';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import FooterV2 from './global-components/footer-v2';
import CollectionBannerV4 from './section-components/collection-banner-v4';
import CollectionBanner from './section-components/collection-banner';

const ProductDetailBlossom = () => {
    return <div>
        <NavbarV2 />
        {/* <PageHeader headertitle="Shop" subheader="Product Details" /> */}
        <SingleProductBlossom />
        <RelatedProduct />
        <Instagram />
        <FooterV2 />
    </div>
}

export default ProductDetailBlossom

