import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
// import { GoChevronDown } from "react-icons/go";

export const Navbar: React.FC = () => {
  const CartList = useAppSelector((state) => state.cart.list).length;

  return (
    <section className=" w-full h-[20hw] bg-gray-700 flex justify-around items-center px-8 py-6">
      <div>
        <h2 className="text-white font-semibold text-lg">Shopping Cart</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search a product..."
          className=" w-[30vw] px-2 py-1.5 rounded-md"
        />
      </div>
      <Link to={"/products/carts"}>
        <button className="bg-green-600 rounded-md text-2xl flex justify-center items-center gap-x-2 text-white px-8 py-3">
          <FaShoppingCart />
          <span className="text-lg font-serif font-medium">{CartList}</span>
          {/* <button>
            <GoChevronDown />
          </button> */}
        </button>
      </Link>
    </section>
  );
};
