import React from "react";

function Product() {
  let products = ["Laptop", "Mouse", "Pen", "Computer",'Laptop'];

  return (
    <div>
      <ul>
        {products.map((product,index) => (
            <li key={index}>{product}</li>
          )
        )}
      </ul>

    </div>
  );
}

export default Product;
