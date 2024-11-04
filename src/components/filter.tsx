import React from "react";
import { useAppDispatch } from "../redux/hook";
import { ProductActions } from "../redux/features/product.slice";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const sortTitleA = () => {
    dispatch(ProductActions.sortTitleA());
  };
  const sortTitleD = () => {
    dispatch(ProductActions.sortTitleD());
  };
  const toggleStock = () => {
    dispatch(ProductActions.toggleStock());
  };
  const toggleFastDelivery = () => {
    dispatch(ProductActions.toggleFastDelivery());
  };
  const clearFilters = () => {
    dispatch(ProductActions.clearFilters());
  };

  return (
    <section className="bg-slate-500 max-w-[22vw] w-full h-screen fixed left-0 top-[100px] flex flex-col gap-6 p-6 rounded-md text-white">
      <h2 className="text-2xl font-bold">Filter Products</h2>
      <div className="flex items-center gap-2">
        <input type="radio" name="fil" onClick={sortTitleA} />
        <label>Ascending</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="fil" onClick={sortTitleD} />
        <label>Descending</label>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" onClick={toggleStock} />
        <label>Include Out of Stock</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" onClick={toggleFastDelivery} />
        <label>Fast Delivery Only</label>
      </div>
      <button
        onClick={clearFilters}
        className="bg-slate-200 py-2 text-gray-800 font-semibold rounded-lg mt-10"
      >
        Clear Filter
      </button>
    </section>
  );
};
