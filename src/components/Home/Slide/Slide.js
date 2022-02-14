import React from 'react';
import './Slide.css';
import slide1 from '../../../images/slide-1.jpg';
import slide2 from '../../../images/slide-2.jpg';
import slide3 from '../../../images/slide-3.jpg';
const Slide = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={slide1} className="d-block w-100" alt="" />
                <div className="carousel-caption green">
                  <p>THE <span className='green-text'>SHOE</span> THATS ADAPTS YOU</p>
                  <h1>TENNIS SHOES</h1>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={slide2} className="d-block w-100" alt="" />
                <div className="carousel-caption red">
                  <p>THE <span className='red-text'>SHOE</span> THATS ADAPTS YOU</p>
                  <h1>STREET SHOES</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="" />
                <div className="carousel-caption orange">
                  <p>THE <span className='orange-text'>SHOE</span> THATS ADAPTS YOU</p>
                  <h1>FOOTBALL SHOES</h1>  
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div> 
    );
};

export default Slide;