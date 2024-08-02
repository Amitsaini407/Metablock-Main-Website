import React, { useContext } from "react";
import star_icon from "./Assets/star_icon.png";
// import { ShopContext } from "./ShopContext";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  // const {addToCart} = useContext(ShopContext);
  // const {removeToCart} = useContext(ShopContext);

  // Check if the 'product' object is defined
  if (!product) {
    return null; // or display a loading state or an error message
  }

  // Check if the 'image' property is defined
  if (!product.image) {
    return (
      <div>
        {/* Display an error message or placeholder image if 'image' is undefined */}
        <p>Error: Product image not available</p>
      </div>
    );
  }

  return (
    <div className="Product-container">
      {/* <div className="product-image">
        <img src={product.image} alt="" />
      </div>
      <div className="Details-container">
        <h4>{product.name}</h4>
        <div>
          <p>{product.Paragraph}</p>
        </div>
      </div> */}
      <h1>Sorry NO Announcements</h1>
    </div>
  );
};

export default ProductDisplay;
