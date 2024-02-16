import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-oswald text-4xl hover:text-black cursor-pointer text-center transition">
       <span className="text-[#AA468E]">Hinata </span><span className="text-[#8CC63D]">Pharmacy</span>
      </div>
    </Link>
  );
};

export default Logo;
