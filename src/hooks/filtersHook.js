import { useProductsContext } from "../contexts/index";
import {
  filterByCheckbox,
  filterByGender,
  filterByPriceRange,
  filterByDiscount,
  filterBySearch,
  sortByPrice,
} from "../utils/filterUtils";

const useFilter = () => {
  const { allProducts, filters } = useProductsContext();
  const { gender, categories, priceRange, discount, sortBy, searchText } =
    filters;

  let filteredData = filterBySearch(searchText, allProducts);
  filteredData = filterByGender(gender, filteredData);
  filteredData = filterByPriceRange(priceRange, filteredData);
  filteredData = filterByCheckbox(categories, filteredData);
  filteredData = filterByDiscount(discount, filteredData);
  filteredData = sortByPrice(sortBy, filteredData);

  return filteredData;
};

export { useFilter };
