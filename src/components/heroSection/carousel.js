// components/Carousel.js
"use client"
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const slides = [
  {
    key: 1,
    content: (
      <img
        src="/images/heroSection/web-development-1.png"
        alt="Web Development"
        style={{ borderRadius: '50%', width: '100%', height: '100%' }}
      />
    ),
  },
  {
    key: 2,
    content: (
      <img
        src="/images/heroSection/mobile-development-devwave.png"
        alt="Mobile Development"
        style={{ borderRadius: '50%', width: '100%', height: '100%' }}
      />
    ),
  },
  {
    key: 3,
    content: (
      <img
        src="/images/heroSection/graphics-design-devwave.png"
        alt="Graphics Design"
        style={{ borderRadius: '50%', width: '100%', height: '100%' }}
      />
    ),
  },
  {
    key: 4,
    content: (
      <img
        src="/images/heroSection/marketing-devwave.png"
        alt="Marketing"
        style={{ borderRadius: '50%', width: '100%', height: '100%' }}
      />
    ),
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: `rotateY(${currentIndex * (360 / slides.length)}deg)`,
  });

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="relative w-full h-full perspective-1000">
        {slides.map((slide, index) => (
          <animated.div
            key={slide.key}
            className={`w-full h-full absolute top-0 left-0 transform transition-all duration-500 ${
              index === currentIndex ? 'z-10' : 'z-0'
            }`}
            style={{
              ...props,
              transform: props.transform.interpolate(
                (rotateY) => `rotateY(${rotateY}deg)`
              ),
            }}
          >
            {slide.content}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
