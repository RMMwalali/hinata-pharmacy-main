import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-oswald text-4xl hover:text-black cursor-pointer text-center transition">
       <span className="text-fuchsia-800">Hinata </span><span className="text-green-500">Pharmacy</span>
      </div>
    </Link>
  );
};

export default Logo;
