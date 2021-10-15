import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import FooterV2 from '../components/global-components/footer-v2';

const Contact = () => {
    return <div>
        <NavbarV2 />
        {/* <ContactInfo /> */}
        <ContactForm />
        <Instagram />
        <FooterV2 />
    </div>
}

export default Contact

