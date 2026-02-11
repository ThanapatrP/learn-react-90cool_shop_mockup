import ProductCard from "../../comps/product-card/ProductCard";

import "./Product.css";
import "/src/comps/product-card/ProductCard.css";

function Products({ baseUrl }) {
  return (
    <div className="cardHolder">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Products;
