import React, { useState } from "react";
import { useProductsContext } from "../../contexts";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const CategoryCard = ({
  category: { categoryName, description, categoryImg },
}) => {
  const navigate = useNavigate();
  const { applyFilters } = useProductsContext();
  const [showCategory, setShowCategory] = useState(true);

  const clickHandler = () => {
    applyFilters("categories", [categoryName]);
    navigate("/products", { state: { from: "category" } });
  };

  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust the value to control the stagger timing
      },
    },
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center rounded-xl bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden categoryContainer"
      onClick={clickHandler}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.img
        src={categoryImg}
        alt={categoryName}
        className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75, delay: 0.5 } }}
      />
      <motion.div
        className="flex flex-col w-full h-full justify-center items-center transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75, delay: 0.75 } }}
      >
      <motion.h1
        className="text-3xl xs:text-5xl sm:text-7xl lg:text-5xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {categoryName.split(" ").map((word, index) => (
          <motion.span key={index} variants={wordVariants}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default CategoryCard;
