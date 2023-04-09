import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="font-semibold text-lg flex items-center mx-auto">
      <Link className="ml-5" to="/">
        Home
      </Link>
      <Link className="ml-5" to="/review">
        Order Review
      </Link>
      <Link className="ml-5" to="/about">
        About
      </Link>
      <Link className="ml-5" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
