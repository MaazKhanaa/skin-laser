import { Fragment } from 'react';
import './paragraph.css';

const Paragraph = (props) => {
  return (
    <Fragment>
      <p className='paragraph'>{props.text}</p>
    </Fragment>
  );
};

export default Paragraph;
