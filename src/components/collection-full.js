import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import CollectionPage from './shop-components/collection-full';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import FooterV2 from '../components/global-components/footer-v2';
const CollectionList = () => {
    return <div>
        <NavbarV2 />
        <CollectionPage />
        {/* <Delivery /> */}
        <Instagram  />
        <FooterV2 />
    </div>
}

export default CollectionList

