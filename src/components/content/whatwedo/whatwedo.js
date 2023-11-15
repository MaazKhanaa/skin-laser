import { Fragment } from 'react';
import MainHeading from '../../common/mainHeading/mainheading';
import { whatwedoData, whatWeDoPic } from '../../constants/whatwedo.ts';
import './whatwedo.css';
import { appointmentservice } from '../../constants/appointment.ts';
import { FiCheckCircle } from 'react-icons/fi';

const WhatWeDo = () => {
  return (
    <Fragment>
      <div className='sectionSpacing'>
        <div className='row mx-0'>
          <div className='col-lg-6 ps-md-5 ps-2 mb-4 mb-lg-0'>
            {whatwedoData.map((item) => (
              <div>
                <div>
            <MainHeading text={item.heading} />
               </div>
                <p className='mt-0'>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            ))}
            <div className='row'>
              {appointmentservice.map((item, index) => (
                <div className='col-md-6 mb-3' key={index}>
                  <div className='row align-items-center'>
                    <div className='col-auto'>
                      <span className='whatWedoIcon'>
                        <FiCheckCircle />
                      </span>
                    </div>
                    <div className='col ps-0'>
                      <span className='whatWeDoText'>{item.option}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {whatwedoData.map((item) => (
          <h5>{item.text2}</h5>
        ))}
          </div>
          <div className='col-lg-6'>
            {whatWeDoPic.map((item) => (
              <img
                src={item.mainImg}
                className='w-100 h-100 object-fit-cover' style={{borderTopLeftRadius: "300px", borderBottomLeftRadius: "300px"}}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatWeDo;
