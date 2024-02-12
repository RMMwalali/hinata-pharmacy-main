import React, { useState } from "react";
import { useProductsContext } from "../../contexts";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Import arrow icons
import CategoryCard from "./CategoryCard";

const CategoryList = ({ catRef }) => {
  const { categoryList } = useProductsContext();
  const [expanded, setExpanded] = useState(false);

  // Slice the categoryList to display only the first 6 categories when not expanded
  const displayedCategories = expanded ? categoryList : categoryList.slice(0, 6);

  return (
    <>
      <h1 className="text-3xl md:text-4xl  break-words text-center mt-10">
        Categories
      </h1>
      <motion.section
        className="grid  grid-cols-1  md:grid-cols-3    gap-4  py-4 mt-1 relative"
        ref={catRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {displayedCategories.map((categoryItem) => (
          <CategoryCard key={categoryItem._id} category={categoryItem} />
        ))}
        {/* Render dropdown button only if there are more than 6 categories */}
        {categoryList.length > 6 && (
          <motion.button
            className="absolute bottom-2 right-2 bg-gray-200 rounded-full p-2 focus:outline-none"
            onClick={() => setExpanded(!expanded)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {expanded ? (
              <AiOutlineUp className="text-gray-600 text-xl" />
            ) : (
              <AiOutlineDown className="text-gray-600 text-xl" />
            )}
          </motion.button>
        )}
      </motion.section>
    </>
  );
};

export default CategoryList;
