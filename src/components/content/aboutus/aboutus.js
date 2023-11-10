import { Fragment } from 'react';
import { aboutUsData, aboutUsPic } from '../../constants/aboutus.ts';
import MainHeading from '../../common/mainHeading/mainheading.js';
import Paragraph from '../../common/paragraph/paragraph.js';
import { FaGraduationCap } from 'react-icons/fa';
import './aboutus.css';

const AboutUs = () => {
  return (
    <Fragment>
      <div className='container sectionSpacing'>
        <div className='row'>
          <div className='col-sm-6'>
            {aboutUsPic.map((item) => (
              <img src={item.imag} />
            ))}
          </div>
          <div className='col-sm-6'>
            {aboutUsData.map((item) => (
              <div>
                <MainHeading text={item.heading} />
                <Paragraph text={item.text} />
                <div className='d-flex mb-3'>
                  <span className='aboutIcon'>
                    <FaGraduationCap />
                  </span>
                  <span className='aboutText'>{item.Edu1}</span>
                </div>
                <div className='d-flex mb-3'>
                  <span className='aboutIcon'>
                    <FaGraduationCap />
                  </span>
                  <span className='aboutText'>{item.Edu2}</span>
                </div>
                <div className='d-flex'>
                  <span className='aboutIcon'>
                    <FaGraduationCap />
                  </span>
                  <span className='aboutText'>{item.Edu3}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
