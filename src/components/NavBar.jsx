import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4 shadow-md font-inter">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-green-200 transition duration-300"
        >
          Eco Recitec
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-green-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/data"
            className="text-white text-lg font-medium hover:text-green-200 transition duration-300"
          >
            Dados
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
