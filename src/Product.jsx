import React from 'react';
import {Link} from 'react-router-dom';
function Product({thumbnail,category,title,price,id}) {
  return (


    <div className=" bg-white ">

      <div className="mb-2 max-w-xs ">
        <img className="w-64 h-64 object-cover" src={thumbnail} />
      </div>
      <div className="mb-2">
        <h1 className="text-gray-500 text-xs">{category}</h1>
        <h3 className="text-sm font-bold text-black">{title}</h3>
        <p className="text-sm text-black">${price}</p>
        <div className="mt-2 flex justify-center  ">
    <Link className=" text-center px-2 py-2 bg-primary-default hover:bg-primary-dark text-white " to={"/products/" + id}>View Detail</Link>    </div>
      </div>
    </div>
  )
}

export default Product; 