import { Fragment } from 'react';
import './subheading.css';

const SubHeading = (props) => {
  return (
    <Fragment>
      <h2 className='subHeading'>{props.text}</h2>
    </Fragment>
  );
};

export default SubHeading;
