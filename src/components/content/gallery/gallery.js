import { Fragment } from 'react';
import MainHeading from '../../common/mainHeading/mainheading';
import { galleryData } from '../../constants/gallery.ts';
import { Link } from 'react-router-dom';
import './gallery.css';
const Gallery = () => {
  const landingGallery = galleryData.slice(0, 8);
  return (
    <Fragment>
      <div className='container sectionSpacing'>
        <MainHeading text='Gallery' />

        <div className='row'>
          {landingGallery.map((item, index) => (
            <div className='col-lg-3 mb-4' key={index}>
              <Link to={item.img}>
                <img src={item.img} className=' d-inline-flex galleryImg' />
              </Link>
            </div>
          ))}
          <div className='text-center'>
            <Link to='/' className='primaryBtn'>
              View More
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
