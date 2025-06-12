import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images from the pics folder
import slide2 from '/carousel_images/Agro_commodities_img.png';
import slide1 from '/carousel_images/cargo_img.png';
import slide5 from '/carousel_images/coffee_img.png';
import slide4 from '/carousel_images/spices_img.png';
import slide3 from '/carousel_images/fruits_and_veg_img.png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in pixels) to trigger a slide change
  const minSwipeDistance = 50;

  const slides = [
    {
      image: slide1,
      title: 'Global Export Excellence',
      subtitle: 'Connecting businesses worldwide with premium quality products',
    },
    {
      image: slide2,
      title: 'Quality & Reliability',
      subtitle: 'Your trusted partner in international trade and commerce',
    },
    {
      image: slide3,
      title: 'Innovation in Export',
      subtitle: 'Leading the way with cutting-edge logistics solutions',
    },
    {
      image: slide4,
      title: 'Innovation in Export',
      subtitle: 'Leading the way with cutting-edge logistics solutions',
    },
    {
      image: slide5,
      title: 'Innovation in Export',
      subtitle: 'Leading the way with cutting-edge logistics solutions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle touch start
  const onTouchStart = (e:any) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const onTouchMove = (e:any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Next slide
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Previous slide
    }
  };

  // const goToPreviousSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // const goToNextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            {slides[currentSlide].subtitle}
          </p>
          <button className="bg-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover More
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronRight size={32} />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;