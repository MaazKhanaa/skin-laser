import { Fragment } from 'react';
import MainHeading from '../../common/mainHeading/mainheading';
import { ContactHead } from '../../constants/contact.ts';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './contact.css';
import WhatsAppChat from '../../constants/whatsAppChat.js';

const Contact = () => {
  return (
    <Fragment>
      <div className='container sectionSpacing' >
        {ContactHead.map((item) => (
          <MainHeading text={item.heading} />
        ))}
        <div className='box-shadow border-radius py-4'>
          <div className='row m-0'>
            {/* {contactData.map((item, index) => {
              <div className='col-lg-4' key={index}>
                <div>
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              </div>;
            })} */}
            <div className='col-lg-3 contactMain mb-3 mb-lg-0'>
              <div className='d-flex align-items-center'>
                <span className='contactIcon'>
                  <AiFillClockCircle />
                </span>
                <div className='pl-3'>
                  <h6 className='mb-0 contactHead'>Timing</h6>
                  <p className='m-0 contactPara'>Mon - Thu 3PM to 8PM</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 contactMain mb-3 mb-lg-0'>
              <div className='d-flex align-items-center'>
                <span className='contactIcon'>
                  <FaPhone />
                </span>
                <div className='pl-3'>
                  <h6 className='mb-0 contactHead'>Phone</h6>
                  <p className='m-0 contactPara'>+92 314 4929877</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 contactMain mb-3 mb-lg-0'>
              <div className='d-flex align-items-center'>
                <span className='contactIcon'>
                  <WhatsAppChat phoneNumber="+923147964001" />
                </span>
                <div className='pl-3'>
                  <h6 className='mb-0 contactHead'>Whatsapp</h6>
                  <p className='m-0 contactPara'>03147964001</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 mb-3 mb-lg-0'>
              <div className='d-flex align-items-center'>
                <span className='contactIcon'>
                  <MdEmail />
                </span>
                <div className='pl-3'>
                  <h6 className='mb-0 contactHead'>Email</h6>
                  <p className='m-0 contactPara'>bestskinlaser@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.761229689461!2d72.31795491744384!3d34.76160709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc397d117f61cb%3A0x821bf8d566112a59!2sThe%20Best%20Skin%20and%20Laser%20Clinic!5e0!3m2!1sen!2s!4v1690199277661!5m2!1sen!2s'
          width='100%'
          height='450'
          style={{ border: '0' }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </Fragment>
  );
};

export default Contact;
