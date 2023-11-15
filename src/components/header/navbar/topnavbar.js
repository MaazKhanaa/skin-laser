import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './navbar.css';
import { Link } from 'react-router-dom';
import WhatsAppChat from '../../constants/whatsAppChat';

const TopNavbar = () => {
  return (
    <div className='topnavbarMain'>
      <div className='container'>
        <div className='row py-2 align-items-center'>
          <div className='col d-none d-md-block'>
            <div className='d-flex align-items-center'>
              <span className='text-white me-3'>
                <FaLocationDot />
              </span>
              <span className='text-white addressText'>
                Jalil Shopping Mall, near city center, Qamber, Swat, Mingora,
                Pakistan, 19110
              </span>
            </div>
          </div>

          <div className='col-auto'>
            <div className='d-flex'>
              <Link
                className='topNavLink me-3'
                target='_blank'
                to='https://www.facebook.com/thebestskinclinic'>
                <FaFacebookF />
              </Link>
              <Link
                className='topNavLink pe-3'
                target='_blank'
                to='https://www.instagram.com/thebestskinandlaser/'>
                <AiFillInstagram />
              </Link>
              <span className='topNavLink'>
                <WhatsAppChat phoneNumber="+923147964001" />
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
