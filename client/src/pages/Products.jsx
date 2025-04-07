import Card from "../components/Card";
import { useInfiniteTodos } from "../hooks/useInfiniteTodos";
import styles from '../css/Content.module.css'
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Banner";
import Categories from "../components/Shop/Categories";

const Product = () => {
  const { category } = useParams();
  const { data, products, fetchNextPage, isLoading, isError, hasNextPage} = useInfiniteTodos(category);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <>
    <div className={styles.mainContent}>
        <Banner category={category}></Banner>
        <h1 className={styles.category}>{category}</h1>
        <Breadcrumbs current={category}></Breadcrumbs>
        <Categories></Categories>
        <div id="products" className={styles.productsContainer}>
            {products.map((product) => {
            return (
                <Card key={product.id} product={product} label={true}></Card>
            );
            })}
        </div>
        <div className={styles.divider}></div>
        {hasNextPage ? <button onClick={fetchNextPage} className={styles.moreBtn}>VIEW MORE</button> : null}
    </div>
    </>
  );
};

export default Product;
