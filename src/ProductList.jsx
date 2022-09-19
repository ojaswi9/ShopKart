import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (<div className="sm:flex flex-col md:grid grid-cols-3 px-10 justify-center gap-2 ">
    {products.map(function(item) {
      return (<Product key = {item.title} {...item} />);
    
    }
    )
    }
    <span className="w-64"></span>
    <span className="w-64"></span>
    <span className="w-64"></span>
  </div>
  );
}
export default ProductList;