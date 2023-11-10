import { Fragment } from 'react';
import Carousal from './carousal/carousal';
import OurServices from './our-services/services';
import WhatWeDo from './whatwedo/whatwedo';
import Testimonial from './testimonials/testimonial';
import Gallery from './gallery/gallery';
import AboutUs from './aboutus/aboutus';
import Appointment from './appointment/appointment';
import Contact from './contactus/contact';

const Content = () => {
  return (
    <Fragment>
      <Carousal />
      <OurServices />
      <AboutUs />
      <WhatWeDo />
      <Gallery />
      <Testimonial />
      <Appointment />
      <Contact />
    </Fragment>
  );
};

export default Content;
