import './input.css';

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className='formInput' />;
};

export default Input;
