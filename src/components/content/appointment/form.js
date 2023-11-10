import FormLabel from '../../common/formlabel/fromlabel';
import Input from '../../common/input/input';
import { appointmentservice } from '../../constants/appointment.ts';
import './appointment.css';

const Form = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='formGroup'>
            <FormLabel text='Name' />
            <Input type='text' placeholder='Enter your Name' />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='formGroup'>
            <FormLabel text='Email' />
            <Input type='email' placeholder='Enter your Email' />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='formGroup'>
            <FormLabel text='Select Date' />
            <Input type='date' placeholder='Enter your Phone Number' />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='formGroup'>
            <FormLabel text='Request Appointment for' />
            <select className='formInput'>
              {appointmentservice.map((item) => (
                <option>{item.option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='col-12'>
          <FormLabel text='Description' />
          <textarea
            className='formInput'
            placeholder='Enter your Description'
            rows={7}></textarea>
        </div>

        <div className='col-12 text-right mt-3'>
          <button type='submit' className='primaryBtn'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
