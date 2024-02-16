import { BsArrowDownRightCircle, BsWhatsapp } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import bannerImg from "../../assets/bannerImg.png";
import { useNavigate } from "react-router";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButton from "./../banner/floatingButton"

export const setBackgroundImage = (url, style) => ({ backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...style })

const carouselItems = [
  { imgUrl: 'https://res.cloudinary.com/dtnbwgpca/image/upload/v1705507851/ePharma/lya0bsrbbhpcxt91oeom.jpg', heading: 'Welcome to Hinata Pharmacy' },
  { imgUrl: 'https://res.cloudinary.com/dtnbwgpca/image/upload/v1708003932/m028t0135_e_medical_icon_24aug22_flrfnf.jpg', heading: 'Get personalized care, from the comfort of your home' },
  { imgUrl: 'https://res.cloudinary.com/dtnbwgpca/image/upload/v1705507847/ePharma/v3s9mjqdvizgymwac7a2.jpg', heading: 'Discover the Best in Health & Wellness' },
  { imgUrl: 'https://res.cloudinary.com/dtnbwgpca/image/upload/v1708003593/shopping-cart-with-pill-foils-copy-space_in8xga.jpg', heading: 'Get the medications you need, delivered' },
  // ... add more items as needed
];

const Banner = ({ catRef }) => {
  const navigate = useNavigate();
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!autoplay && slideIndex === carouselItems.length - 1) {
      setTimeout(() => {
        carouselRef.current.slickGoTo(0);
      }, 3000);
    }
  }, [autoplay, slideIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      if (!autoplay) {
        setSlideIndex(next);
      }
    }
  };

  return (
    <>
      <Slider ref={carouselRef} {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.imgUrl} alt={item.heading} className="w-full h-[400px] object-cover rounded-md" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-gradient-to-b from-transparent to-transparent to-black">
              <h1 className="text-5xl font-bold text-white mb-5 w-2/3">{item.heading}</h1>
              <div className="relative w-[300px] overflow-hidden ">
              <button 
                onClick={() => {
                  // Handle click event, e.g., navigate to a chat page
                  navigate('/chat');
                }}
                className="px-6 py-4 bg-[#AA468E]  text-white rounded-md hover:bg-green-600 focus:outline-none flex font-semibold"
              >
                <BsWhatsapp size={20} className="mr-2"/>
                Chat with an Expert
              </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <FloatingButton/>
    </>
  );
};

export default Banner;
