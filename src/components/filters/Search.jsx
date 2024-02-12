import { CiSearch } from "react-icons/ci";
import { filterBySearch } from "../../utils/filterUtils";
import { useProductsContext } from "../../contexts";
import { useEffect, useState } from "react";
import CartItemCard from "../cart/CartItemCard";
import { useLocation, useNavigate } from "react-router-dom";
import spinningLoaders from "../../assets/loaderBlack.svg";
const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { allProducts, applyFilters } = useProductsContext();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showList, setShowList] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (location?.pathname !== "/products") {
      setSearch("");
    }
  }, [location]);
  useEffect(() => {
    setSearching(true);
    let id;
    id = setTimeout(() => {
      setFilteredData(filterBySearch(search, allProducts));
      setSearching(false);
      if (location?.pathname === "/products" && !search) {
        applyFilters("searchText", search);
      }
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
    if (!showList) setShowList(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    applyFilters("searchText", search);
    setShowList(false);
    navigate("/products");
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className={`flex items-center bg-black/[0.075] px-3 ${
          search && showList ? "rounded-t-md" : "rounded-full"
        } text-sm transition`}
      >
        <select name="product_cat" className="outline-none bg-transparent">
                <option value="0" defaultValue>All Categories</option>
                <option className="level-0" value="breads-sweets">Breads Sweets</option>
                <option className="level-1" value="chocolate">&nbsp;&nbsp;&nbsp;Chocolate</option>
                <option className="level-1" value="cupcakes">&nbsp;&nbsp;&nbsp;Cupcakes</option>
                <option className="level-1" value="fruit-filling">&nbsp;&nbsp;&nbsp;Fruit Filling</option>
                <option className="level-1" value="stouffer">&nbsp;&nbsp;&nbsp;Stouffer</option>
                <option className="level-0" value="coffees-and-teas">Coffees and Teas</option>
                <option className="level-1" value="fizzy-drinks">&nbsp;&nbsp;&nbsp;Fizzy Drinks</option>
                <option className="level-1" value="hot-drinks">&nbsp;&nbsp;&nbsp;Hot Drinks</option>
                <option className="level-1" value="tea-coffee">&nbsp;&nbsp;&nbsp;Tea &amp; Coffee</option>
                <option className="level-1" value="water">&nbsp;&nbsp;&nbsp;Water</option>
                <option className="level-0" value="foodcupboard">Food Cupboard</option>
                <option className="level-1" value="breakfast-cereals">&nbsp;&nbsp;&nbsp;Breakfast Cereals</option>
                <option className="level-1" value="chocolate-sweets">&nbsp;&nbsp;&nbsp;Chocolate &amp; Sweets</option>
                <option className="level-1" value="crisps-snacks-nuts">&nbsp;&nbsp;&nbsp;Crisps, Snacks &amp; Nuts</option>
                <option className="level-1" value="tins-cans">&nbsp;&nbsp;&nbsp;Tins &amp; Cans</option>
                <option className="level-0" value="frozen-seafoods">Frozen Seafoods</option>
                <option className="level-1" value="buitoni">&nbsp;&nbsp;&nbsp;Buitoni</option>
                <option className="level-1" value="buttercream">&nbsp;&nbsp;&nbsp;Buttercream</option>
                <option className="level-1" value="freshly">&nbsp;&nbsp;&nbsp;Freshly</option>
                <option className="level-1" value="hot-pockets">&nbsp;&nbsp;&nbsp;Hot Pockets</option>
                <option className="level-0" value="fruits-vegetables">Fruits &amp; Vegetables</option>
                <option className="level-1" value="fruit">&nbsp;&nbsp;&nbsp;Fruit</option>
                <option className="level-1" value="meat-poultry">&nbsp;&nbsp;&nbsp;Meat &amp; Poultry</option>
                <option className="level-1" value="milk-butter-eggs">&nbsp;&nbsp;&nbsp;Milk, Butter &amp; Eggs</option>
                <option className="level-1" value="vegetables">&nbsp;&nbsp;&nbsp;Vegetables</option>
                <option className="level-0" value="milks-and-dairies">Milks and Dairies</option>
                <option className="level-1" value="bouncers">&nbsp;&nbsp;&nbsp;Bouncers</option>
                <option className="level-1" value="nursery">&nbsp;&nbsp;&nbsp;Nursery</option>
                <option className="level-1" value="pushchairs">&nbsp;&nbsp;&nbsp;Pushchairs</option>
                <option className="level-1" value="toys">&nbsp;&nbsp;&nbsp;Toys</option>
                <option className="level-0" value="pet-foods">Pet Foods</option>
                <option className="level-1" value="cookware">&nbsp;&nbsp;&nbsp;Cookware</option>
                <option className="level-1" value="cutlery">&nbsp;&nbsp;&nbsp;Cutlery</option>
                <option className="level-1" value="dinnerware">&nbsp;&nbsp;&nbsp;Dinnerware</option>
                <option className="level-1" value="utensils">&nbsp;&nbsp;&nbsp;Utensils</option>
                <option className="level-0" value="raw-meats">Raw Meats</option>
                <option className="level-1" value="chinese">&nbsp;&nbsp;&nbsp;Chinese</option>
                <option className="level-1" value="indian">&nbsp;&nbsp;&nbsp;Indian</option>
                <option className="level-1" value="italian">&nbsp;&nbsp;&nbsp;Italian</option>
                <option className="level-1" value="traditional-british">&nbsp;&nbsp;&nbsp;Traditional British</option>
                <option className="level-0" value="wines-alcohol-drinks">Wines &amp; Alcohol Drinks</option>
                <option className="level-1" value="bottle">&nbsp;&nbsp;&nbsp;Bottle</option>
                <option className="level-1" value="carlsberg">&nbsp;&nbsp;&nbsp;Carlsberg</option>
                <option className="level-1" value="fruit-purees">&nbsp;&nbsp;&nbsp;Fruit Purees</option>
                <option className="level-1" value="heineken">&nbsp;&nbsp;&nbsp;Heineken</option>
            </select>
        <input
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
          type="search"
          value={search}
          placeholder="Search here"
          onChange={changeHandler}
        />
        <CiSearch />
      </form>
      {search && showList && (
        <ul className="absolute bg-amber-50 w-full max-h-72 overflow-auto rounded-b-md z-10">
          {searching ? (
            <li className="h-10 flex items-center justify-center">
              <img src={spinningLoaders} alt="Searching..." />
            </li>
          ) : filteredData.length ? (
            filteredData.map((product) => (
              <li key={product._id} className="">
                <CartItemCard
                  product={product}
                  isSearch={true}
                  setSearch={setSearch}
                />
              </li>
            ))
          ) : (
            <li className="h-10 flex items-center justify-center">
              No Item to show
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Search;
