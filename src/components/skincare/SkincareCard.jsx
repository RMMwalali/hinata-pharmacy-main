import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";


const SkincareCard = (product) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }} // Initial position and opacity
      animate={{ x: 0, opacity: 1 }} // Animation to move to the original position with full opacity
      transition={{ duration: 0.5 }} // Animation duration
      className="flex flex-col px-4 py-2 rounded-xl bg-black/[.06] cursor-pointer gap-3"
    >
      <Link to={`/product/${product._id}`}>
        <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
          <div>
            <h1 className="text-xl xs:text-base sm:text-xl font-bold">
              {product.name}
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-between">
              <h1 className="text-lg xs:text-base sm:text-lg font-bold">
                Ksh.{product.price}
              </h1>
              <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                {product.inCart ? (
                  <AiOutlineCheck className="text-white font-bold text-sm" />
                ) : (
                  <AiOutlinePlus className="text-white font-bold text-sm" />
                )}
              </button>
            </div>
            <p className="text-gray-600 text-sm text-end">{product.category}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 xs:w-28 xs:h-28 sm:w-32 sm:h-32 py-2 object-cover hover:scale-110 transition"
            whileHover={{ scale: 1.1 }} // Increase scale on hover
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default SkincareCard