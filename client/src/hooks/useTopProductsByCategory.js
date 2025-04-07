import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useTopProductsByCategory = (category, limit) => {
    const query = useQuery({
      queryKey: ['products', category, limit],
      queryFn: async () => {
        const res = await api(`https://dummyjson.com/products/category/${category}?select=title,price,thumbnail,brand,rating,description,category`);
        return res;
      },
    });

    const products = query.data?.products.sort((a,b) => b.rating - a.rating).slice(0,limit);

    return {
        ...query,
        products,
      };
  };