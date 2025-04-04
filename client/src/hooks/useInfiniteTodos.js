import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useInfiniteTodos = () => {
    const query = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: ({pageParam = 0}) => api(`https://dummyjson.com/products?limit=10&skip=${pageParam}&select=title,price`),
        getNextPageParam: (last, all) => {
            const loadedCount = all.reduce((acc, page) => acc + (page.products?.length || 0), 0);
            if (loadedCount >= last.total) return undefined;
            return loadedCount;
        }
    })

    const products = query.data?.pages?.flatMap(page => page.products) || [];

    return {
        ...query,
        products,
      };
}