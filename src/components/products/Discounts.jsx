import { GiRoundStar } from "react-icons/gi";
import { BsStarHalf } from "react-icons/bs";

const Discount = ({ product }) => {
  const discountDiff = product?.discount - Math.floor(product?.discount);
  return discountDiff ? (
    <>
      {new Array(Math.floor(product?.discount ?? 5)).fill().map((i) => (
        <GiRoundStar className=" text-yellow-400 mb-1" />
      ))}
      <BsStarHalf className=" text-yellow-400 mb-1" />
    </>
  ) : (
    new Array(Math.floor(product?.discount ?? 5))
      .fill()
      .map((i) => <GiRoundStar className=" text-yellow-400 mb-1" />)
  );
};

export default Discount;
