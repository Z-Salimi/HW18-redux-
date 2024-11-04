import React, { memo, useEffect } from "react";
import { ProductCard } from "./productCard";
import { fetchProductList } from "../api/product.api";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { ProductActions } from "../redux/features/product.slice";

export const AllProduct: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const CartList = useAppSelector((state) => state.product.filterList);
  const { data, isLoading} = useQuery({
    queryKey: ["fetching-product"],
    queryFn: fetchProductList,
  });
  useEffect(() => {
    if (data) {
      dispatch(ProductActions.setProducts(data.products));
    }
  }, [data, dispatch]);
  if (isLoading) return <p className="w-[100%] rounded-lg bg-yellow-400 py-4 mr-4 text-center text-xl">Loading...</p>;
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10 px-8 py-4">
        {CartList.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            shippingInformation={item.shippingInformation}
            rating={item.rating}
            image={item.image}
            added={false}
            stock={item.stock}
          />
        ))}
      </section>
    </>
  );
});
