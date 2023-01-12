import "../styles/Testimonials.css";
import next from "../img/next.png";
import prev from "../img/prev.png";
import avatar from "../img/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials container">
        <div className="testimonials-title">
          <h1>What our customer are saying</h1>
        </div>
        <div className="swiper-container">
          <Swiper
            cssMode={true}
            navigation={
              (true, { prevEl: ".button-prev", nextEl: ".button-next" })
            }
            pagination={(true, { el: ".pagination" })}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-container">
                <div className="user-container">
                  <img src={avatar} alt="avatar" className="avatar" />
                  <div className="user-ifno">
                    <h2 className="user-name">Edward Newgate</h2>
                    <p className="user-description">Founder Circle</p>
                  </div>
                </div>
                <div className="comment-container">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <div className="user-container">
                  <img src={avatar} alt="avatar" className="avatar" />
                  <div className="user-ifno">
                    <h2 className="user-name">Edward Newgate</h2>
                    <p className="user-description">Founder Circle</p>
                  </div>
                </div>
                <div className="comment-container">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-container">
                <div className="user-container">
                  <img src={avatar} alt="avatar" className="avatar" />
                  <div className="user-ifno">
                    <h2 className="user-name">Edward Newgate</h2>
                    <p className="user-description">Founder Circle</p>
                  </div>
                </div>
                <div className="comment-container">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="control-container">
        <div className="button-prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="pagination"></div>
        <div className="button-next">
          <img src={next} alt="next" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
