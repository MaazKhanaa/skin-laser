import MainHeading from '../../common/mainHeading/mainheading';
import {
  appointmentHead,
  appointmentImg,
} from '../../constants/appointment.ts';
import Form from './form';

const Appointment = () => {
  return (
    <div className='container sectionSpacing' id='appointmentSection'>
      {appointmentHead.map((item) => (
        <MainHeading text={item.heading} />
      ))}
      <div className='appointmentCard box-shadow overflow-hidden border-radius'>
        <div className='row'>
          <div className='col-lg-4 d-none d-lg-block'>
            {appointmentImg.map((item) => (
              <img src={item.imag} className='w-100 h-100 object-fit-cover' />
            ))}
          </div>
          <div className='col-lg-8'>
            <div className='py-4 p-4 ps-lg-0'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
