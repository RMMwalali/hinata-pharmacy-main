import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "./Checkbox";
import InputRange from "./InputRange";
import InputRadio from "./InputRadio";
import InputRadioType2 from "./InputRadioType2";
import { useProductsContext } from "../../contexts";
import {
  checkboxCategories,
  brandsList,
  discounts,
} from "../../utils/constants";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const FilterSection = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
      <motion.section
        initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
        animate={{ opacity: 1, height: isOpen ? 'auto' : 0, paddingTop: isOpen ? 10 : 0, paddingBottom: isOpen ? 10 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="mt-4 border-b border-gray-200"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{heading}</h2>
          <button onClick={toggleSection}>
            {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        </div>
        {isOpen && children}
      </motion.section>
  );
};

const FilterHeading = ({ text }) => <h2 className="text-xl mb-4">{text}</h2>;
const FilterPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
}
const Filters = ({ isFilterOpen, setIsFilterOpen }) => {
  const { clearFilters } = useProductsContext();


  return (
    <aside
      className={`filtersContainer fixed top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto transition-all ease-in-out duration-300 ${
        isFilterOpen ? 'left-0' : '-left-96'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Filter Products</h1>
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>
      <button
        className="py-0.5 px-2 w-16 text-center bg-black/[0.2] text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors"
        onClick={clearFilters}
      >
        Clear Filters
      </button>

      <FilterSection heading="Brands">
        <div className="grid grid-cols-2 gap-2">
          {brandsList.map((data, index) => (
            <InputRadioType2 data={data} key={index} />
          ))}
        </div>
      </FilterSection>

      <FilterSection heading="Price Range">
        <InputRange />
      </FilterSection>

      <FilterSection heading="Categories">
        <div className="flex flex-col gap-2">
          {checkboxCategories.map((data, index) => (
            <Checkbox data={data} key={index} />
          ))}
        </div>
      </FilterSection>

      <FilterSection heading="Discount">
        {discounts.map((data, index) => (
          <InputRadio data={data} key={index} name="discount" />
        ))}
      </FilterSection>
    </aside>
  );
};
 
//   return (
//     <aside
//       className={`filtersContainer fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
//     transition-all ease-in-out duration-300  ${
//       isFilterOpen ? "left-0 " : "-left-96"
//     }
//     `}
//     >
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold">Filter Products</h1>
//         <AiOutlineClose
//           className="text-xl cursor-pointer"
//           onClick={() => setIsFilterOpen(!isFilterOpen)}
//         />
//       </div>
//       <button
//         className="py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors "
//         onClick={clearFilters}
//       >
//         Clear
//       </button>
//       <section className="py-3">
//         <FilterHeading text="Brand" />
//         <div className="grid grid-rows-2 grid-cols-2 gap-2">
//           {brandsList.map((data, index) => (
//             <InputRadioType2 data={data} key={index} />
//           ))}
//         </div>
//       </section>
//       <section className="py-3">
//         <FilterHeading text="Price Range" />
//         <InputRange />
//       </section>
//       <section className="py-3">
//         <FilterHeading text="Categories" />
//         <div className="flex flex-col gap-2">
//           {checkboxCategories.map((data, index) => (
//             <Checkbox data={data} key={index} />
//           ))}
//         </div>
//       </section>

//       <section className="py-3 flex flex-col gap-2">
//         <FilterHeading text="discount" />
//         {ratings.map((data, index) => (
//           <InputRadio data={data} key={index} name="rating" />
//         ))}
//       </section>
//     </aside>
//   );
// };

export default Filters;
