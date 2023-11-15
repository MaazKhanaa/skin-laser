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
          <div className='col-sm-6 mb-4 mb-sm-0'>
            {aboutUsPic.map((item) => (
              <img src={item.imag} />
            ))}
          </div>
          <div className='col-sm-6'>
            {aboutUsData.map((item) => (
              <div>
                <MainHeading text={item.heading} />
                <Paragraph text={item.text} />
                <Paragraph text={item.text1} />
                <Paragraph text={item.text2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
