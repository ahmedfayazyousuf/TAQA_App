
// import DPWorldLogo from '../1_Assets/DPWorldLogo.png';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    afterChange: () => {
      console.log('Slide after change');
      setIsAnimating(false);
    },
    beforeChange: () => {
      console.log('Slide before change');
      setIsAnimating(true);
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (!isAnimating) {
      const direction = e.deltaY > 0 ? 'next' : 'prev';
      sliderRef.current.slick[direction]();
    }
  };

  return (
    <div className="container" onWheel={handleWheel}>
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <span>1</span>
        </div>
        <div className="slide">
          <span>2</span>
        </div>
        <div className="slide">
          <span>3</span>
        </div>
        <div className="slide">
          <span>4</span>
        </div>
        <div className="slide">
          <span>5</span>
        </div>
        <div className="slide">
          <span>6</span>
        </div>
      </Slider>
    </div>
  )
}



export default Home;