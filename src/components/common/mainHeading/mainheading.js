import { Fragment } from 'react';
import './heading.css';

const MainHeading = (props) => {
  const { text, isWhite, isCenter } = props;
  const textCenter = isCenter ? 'center' : 'left';
  const textColor = isWhite ? 'white' : 'black';
  return (
    <Fragment>
      <h1
        className='mainHeading'
        style={{ color: textColor, textAlign: textCenter }}>
        {text}
      </h1>
    </Fragment>
  );
};

export default MainHeading;
