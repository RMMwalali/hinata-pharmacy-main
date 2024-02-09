import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-oswald text-3xl hover:text-black cursor-pointer text-center transition">
        Hinata Pharmacy
      </div>
    </Link>
  );
};

export default Logo;
