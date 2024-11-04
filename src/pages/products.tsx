
import { Navbar } from "../components/navbar";
import { AllProduct } from "../components/allProduct";
import { Filter } from "../components/filter";

export const ProductsPage: React.FC =() => {
  
  return (
    <div className="pt-28">
    <div className="w-full fixed top-0">
      <Navbar />
    </div>
    <div className="flex pl-80">
      <Filter />
      <AllProduct/>
    </div>
    </div>
  );
};
