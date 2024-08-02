import React from "react";
import arrow_icon from "./Assets/breadcrum_arrow.png";

function BreadCrums({ product }) {
  // Check if the 'product' object and 'category' property are defined
  if (!product || !product.category) {
    console.error(
      "Error: 'product' object or 'category' property is undefined",
      product
    );
    return null;
  }

  return (
    <div className="breadcrum" style={{ color: "white", padding: "6vw" }}>
      {/* Announcement <img src={arrow_icon} alt="" /> */}
      <span
        style={{
          backgroundImage:
            "linear-gradient(93.79deg, #56f3f5 -13.43%, #ec25f8 100.49%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {/* {product.name} */}
      </span>
    </div>
  );
}

export default BreadCrums;
