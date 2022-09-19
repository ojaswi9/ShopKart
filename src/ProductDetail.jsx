import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { getProductData } from './api';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import Loading from './Loading';
import NotFound from './NotFound';




function ProductDetail({onAddToCart}) {
  const id = +(useParams().id);
  const [product, setProduct] = useState();
const [loading,setLoading] = useState(true);
const [count,setCount] = useState(1);


  
  useEffect(function() {
    const xyz = getProductData(id);
    xyz.then(function(product) {
      setProduct(product);
      setLoading(false);
    }
    ).catch(function(){
      setLoading(false);
    }
    );
  }, [id]);

  function handleCountChange(event){
    setCount(+event.target.value);
  }

  function handleButtonClick(){
    onAddToCart(id,count);
  }


if(loading){
  return<Loading/>;
}
  if(!product){
    return <NotFound/>;
  }

  return (
     
      
     
      <div className="p-4 m-5 max-w-6xl mx-auto grow flex bg-white drop-shadow-lg ">

        <Link to='/'><HiArrowNarrowLeft className="text-5xl text-primary-default mr-2"/> Back </Link>
        <div className="w-1/2">
          <img className="w-full h-full object-cover" src={product.thumbnail}></img>
        </div>

        <div class="flex w-1/2 flex-col ml-5 ">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h3 className="text-xl font-bold text-gray-600 mt-5"> ${product.price}</h3>
          <p class="text-xl text-black mt-5">{product.description}</p>
          <div>
            
            <input value={count} onChange={handleCountChange} className="w-16 p-2 border-2 border-primary-default rounded-md mt-5" type="number"></input>
            <button onClick ={handleButtonClick} className="bg-primary-default ml-2 rounded-md text-white p-2 hover:bg-primary-dark">Add to cart</button></div>
          <div className="flex justify-between px-5  py-2">
            <div>
          {id>1 && (<Link to={'/products/' + (id - 1)}><HiArrowNarrowLeft className="text-5xl text-primary-default flex items-center" />Previous</Link>)}</div>
<div>
            <Link to={'/products/' + (id + 1)}><HiArrowNarrowRight className="text-5xl text-primary-default flex items-center" />Next</Link></div>
          </div>

        </div>

      </div>) 
  

}

export default ProductDetail; 