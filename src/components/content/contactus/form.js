import FormLabel from '../../common/formlabel/fromlabel.js';
import Input from '../../common/input/input.js';
import { appointmentservice } from '../../constants/appointment.ts';
import './contact.css';

const Form = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-12'>
          <div className='formGroup'>
            <FormLabel text='Name' />
            <Input type='text' placeholder='Enter your Name' />
          </div>
        </div>
        <div className='col-12'>
          <div className='formGroup'>
            <FormLabel text='Email' />
            <Input type='email' placeholder='Enter your Email' />
          </div>
        </div>
        <div className='col-12'>
          <FormLabel text='Message' />
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
