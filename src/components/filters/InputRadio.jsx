import React from "react";
import { useProductsContext } from "../../contexts";

const InputRadio = ({ data, name }) => {
  const {
    applyFilters,
    filters: { discount },
  } = useProductsContext();

  return (
    <label className="cursor-pointer flex mb-2">
      <input
        type="radio"
        className="accent-current cursor-pointer"
        name={name}
        value={data}
        onChange={(e) => applyFilters(name, data)}
        checked={data === discount}
      />{" "}
      {data} % OFF
    </label>
  );
};

export default InputRadio;
