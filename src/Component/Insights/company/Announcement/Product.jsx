import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "./BreadCrums";
import ProductDisplay from "./ProductDisplay";
import './Product.css'
// import RelatedProducts from "./RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Handle the case where all_product is not available
  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>; // or any other loading state
  }

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div style={{background:"#060606"}}>
      <BreadCrums product={product}  />
      <ProductDisplay product={product} />
      {/* <RelatedProducts/> */}
    </div>
  );
};

export default Product;
