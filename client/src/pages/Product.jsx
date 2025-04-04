import { useInfiniteTodos } from "../hooks/useInfiniteTodos";

const Product = () => {
  const { products, fetchNextPage, isLoading, isError } = useInfiniteTodos();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <>
      <h1>Productpage</h1>
      <div id="products" class="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <img src={product.thumbnail} alt={product.title} loading="lazy" />
              <p>{product.title}</p>
              <p class="price">{product.price} USD</p>
              <button class="buy-btn">Köp nu</button>
            </div>
          );
        })}
      </div>
      <button onClick={fetchNextPage}>fetch more</button>
    </>
  );
};

export default Product;
