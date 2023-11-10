import { Fragment } from 'react';
import MainHeading from '../../common/mainHeading/mainheading';
import {
  testimonialData,
  testimonialHeading,
} from '../../constants/testimonial.ts';
import './testimonial.css';
import { BsQuote } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <Fragment>
      <div className='container sectionSpacing'>
        {testimonialHeading.map((item) => (
          <MainHeading text={item.heading} />
        ))}
        <div className='row'>
          {testimonialData.map((item, index) => (
            <div className='col-md-4 col-sm-6 mb-3'>
              <div
                className='testimonialCard p-4 box-shadow border-radius'
                key={index}>
                <div className='d-flex justify-content-center'>
                  <div className='topImag w-auto position-relative mb-3'>
                    <img src={item.imag} />
                    <div className='testiIcon'>
                      <BsQuote />
                    </div>
                  </div>
                </div>
                <div className='testimonialBody text-center'>
                  <h5 className='mb-1'>{item.authorname}</h5>
                  <h6 className='mb-0 text-secondary'>{item.jobtitle}</h6>
                  <div className='d-flex justify-content-center'>
                    <hr />
                  </div>
                </div>
                <div className='testimonialBody text-center'>
                  <p className='text-center text-secondary mb-0'>
                    "{item.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className='text-center'>
            <Link to='#' className='primaryBtn'>
              View All
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
