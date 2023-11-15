import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { carousalData } from '../../constants/carousal.ts';
import './carousal.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Carousal = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      navigation>
      {carousalData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              <div
                className='carousalMain'
                style={{ backgroundImage: `url(${item.imag})` }}>
                <div className='carousalOverlay'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <h1
                          className=''
                          // dangerouslySetInnerHTML={{
                          //   __html: item.heading.replace('\n', '<br>'),
                          // }}
                        >
                          {item.heading}
                        </h1>
                        <p className=''>{item.text}</p>
                        {/* <div className=''>
                          <Link to='#appointmentSection' className='primaryBtn'>
                            Make an Appointment
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousal;
