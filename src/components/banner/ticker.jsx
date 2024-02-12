import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from './Card';

const Ticker = ({ items }) => {
  const [currentItems, setCurrentItems] = useState([items[0], items[1], items[2]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItems((prevItems) => {
        const nextItems = prevItems.slice(1).concat(prevItems[0]);
        return nextItems;
      });
    },  2000); // Change interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-4 overflow-hidden">
      <AnimatePresence>
        {currentItems.map((item, index) => (
          <Card key={index} content={item} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Ticker;