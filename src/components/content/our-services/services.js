import { Fragment } from 'react';
import MainHeading from '../../common/mainHeading/mainheading';
import { servicesArray } from '../../constants/services.ts';
import { Link } from 'react-router-dom';
import SubHeading from '../../common/subHeading/subheading';
import './services.css';
import Paragraph from '../../common/paragraph/paragraph';

const OurServices = () => {
  return (
    <Fragment>
      <div className='container sectionSpacing'>
        <MainHeading text='Our Services' />
        <div className='row'>
          {servicesArray.map((item, index) => {
            return (
              <div className='col-xl-4 col-sm-6 mb-3'>
                <div className='serviceCard h-100' key={index}>
                  <div className='cardHeading'>
                    <img src={item.imag} />
                  </div>
                  <div className='cardBody p-3'>
                    <div className='d-flex flex-column justify-content-between'>
                      <div>
                        <SubHeading text={item.heading} />
                        <Paragraph text={item.text} />
                      </div>
                      <div className='text-center'>
                        <Link to={item.href} className='secondaryBtn'>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='text-center'>
          <Link to='#' className='primaryBtn'>
            View all
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OurServices;
