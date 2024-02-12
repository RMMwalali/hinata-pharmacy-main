import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "../../assets/bannerImg.png";
import { useNavigate } from "react-router";
import ScrollCarousel from 'scroll-carousel-react';

export const setBackgroundImage = (url, style) => ({ backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...style })
const Banner = ({ catRef }) => {
  const navigate = useNavigate();

  return (
    <main className=" flex justify-between items-center py-3 mb-5  relative">
            <section className="max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-1/3">
        <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-semibold  py-3 w-full ">
          GET FREE DELIVERY
        </h1>
        <p className="py-3 text-lg  text-gray-600 font-semibold">
          For any orders over ksh 1000
          <br />
          the delivery is free!
        </p>
        <section className="flex items-center">
          <button
            className="btn-primary text-sm md:text-base"
            onClick={() => navigate("/products")}
          >
            Start Shopping
          </button>
          <button
            className="p-3 flex items-center"
            onClick={() =>
              catRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="mx-2 text-sm md:text-base">Explore More</span>{" "}
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="hidden w-full lg:flex justify-end">
        <img src={bannerImg} alt="bannerImg" className="w-2/3 h-full" />
      </section>
    </main>
  );
};

export default Banner;
