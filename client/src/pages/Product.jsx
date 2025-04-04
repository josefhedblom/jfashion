import { useInfiniteTodos } from "../hooks/useInfiniteTodos";

const Product = () => {
    const {products, fetchNextPage, isLoading, isError} = useInfiniteTodos();

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong!</p>

    return (
        <div>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            ${product.title} - ${product.price}
                        </li>
                    );
                }
                )}
            </ul>

            <h1>Productpage</h1>
            <button onClick={fetchNextPage}>fetch more</button>
        </div>
    );
}

export default Product;