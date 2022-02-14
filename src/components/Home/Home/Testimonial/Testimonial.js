import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import  { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import Rating from 'react-rating';

const Testimonial = () => {
    return (
        <div className='testimonial py-5'>
            <h1 className='mt-1 mb-5'>Kind words from our Customers</h1>
            <div className='testy'>
            <Swiper
        
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"

        breakpoints={{
          
          992: {
           
            slidesPerView: 2,
          },
          768: {
           
            slidesPerView: 1,
          },
          576: {
           
            slidesPerView: 1,
          },
          320: {
           
            slidesPerView: 1,
          },
        }} 
      >
        <SwiperSlide>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 wrapper">
          <span class="review">
            "Yummy! Yummy! Yummy! I have to say that was thought process (though perhaps not the exact words!) when my latest pair of Atheist Shoes rocked up today."
          </span>
          <br />
          <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star text-warning"
                    initialRating={5}
                    readonly
                />
          <p class="h3"><strong>Jhon Smith</strong></p>
          <p><em>Co-founder at Muzuki</em></p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 wrapper">
          <span class="review">
            "The shoes are way more cool, fantastic, fabulous, vibrant, striking and showy than I expected. I’m proud owner of Naughty Schnitzel Shoes, Das Cognac Boots and now Fuchsia Shoes."
          </span>
          <br />
          <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star text-warning"
                    initialRating={4}
                    readonly
                />
          <p class="h3"><strong>Robert Lee</strong></p>
          <p><em>Manager at Sofiatech</em></p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 wrapper">
          <span class="review">
            "Got the Squashed Frog sneaker - fantastic, high quality, and comfortable, with a great fit - it was better than I imagined it could be, and on a par with any high-end shoes I've owned."
          </span>
          <br />
          <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star text-warning"
                    initialRating={4}
                    readonly
                />
          <p class="h3"><strong>Mickle Jimi</strong></p>
          <p><em>Business Operator at Almax Group</em></p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 wrapper">
          <span class="review">
            "These remain my favorite shoes of all time. They are unbelievably comfortable. They have also proven to be more durable than many other shoes I have owned. "
          </span>
          <br />
          <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star text-warning"
                    initialRating={5}
                    readonly
                />
          <p class="h3"><strong>Douglas Evans</strong></p>
          <p><em>Programmer at Rayan Technology</em></p>
        </div>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </div>
    );
};

export default Testimonial;