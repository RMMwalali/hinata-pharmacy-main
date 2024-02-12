import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ content }) => {
  const variants = {
    hidden: { opacity:  0, x: -100 },
    visible: { opacity:  1, x:  0 },
    exit: { opacity:  0, x:  100 },
  };

  return (
    <motion.div
      className="p-4 bg-blue-500 text-white rounded shadow-lg"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {content}
    </motion.div>
  );
};

export default Card;