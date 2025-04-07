import { useTopProductsByCategory } from "../hooks/useTopProductsByCategory";
import Carousel from "./Carousel";
import Top from "./Top";

const Bestsellers = () => {
    const beauty = useTopProductsByCategory("beauty", 3);
    const bags = useTopProductsByCategory("womens-bags", 3);
    const fragrances = useTopProductsByCategory("fragrances", 3);
  
    const allLoaded = [beauty, bags, fragrances].every((cat) => !cat.isLoading && !cat.isError);
  
    if (!allLoaded) return <p>Loading carousel...</p>;
  
    const groups = [
      <Top products={beauty.products} />,
      <Top products={bags.products} />,
      <Top products={fragrances.products} />
    ];
    return (
        <Carousel items={groups}></Carousel>
    );
}

export default Bestsellers;