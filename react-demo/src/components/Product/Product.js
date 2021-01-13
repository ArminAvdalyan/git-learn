import React from "react";

const Product = ({name, surName, proffession}) => {
  return (
    <div>
     <span>{name}</span> 
      <span>{surName}</span>
      <span>{proffession}</span>
    </div>
  )
}

export default Product;