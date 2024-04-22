import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import About from './section-components/about-style-one';
import FunfactV4 from './section-components/funfact';
import Cta from './section-components/cta';
import Team from './section-components/team';
import Testimonial from './section-components/testimonial-style-one';
import Brand from './section-components/brand-v4';

import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sobre Nosotros"  />
        <About />
        <FunfactV4 />
        <Cta />
        <Team />
        <Testimonial />
        <Brand />
        <Footer />
    </div>
}

export default AboutPage

