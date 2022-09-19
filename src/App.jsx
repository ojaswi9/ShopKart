import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import {Routes,Route} from 'react-router-dom';
import NotFound from './NotFound';


function App() {
const [cart, setCart]=useState({});
function handleAddToCart(productId,count){
  const oldCount= cart[productId] || 0;

  const newCart = {...cart, [productId]:oldCount+count};
  setCart(newCart);
}

  const totalCount= Object.keys(cart).reduce(function(previous,current){
    return previous+cart[current];
  },0);

  return (
    <div className="bg-gray-100 h-screen overflow-scroll flex flex-col ">
      <Navbar productCount={totalCount} ></Navbar>
     <div className="grow">
      <Routes>
      <Route index element ={<ProductListPage/>}></Route>
        <Route path="/products/:id/" element={<ProductDetail onAddToCart={handleAddToCart}/>}></Route>
        <Route path ="*" element={<NotFound/>}></Route>
      </Routes>
     </div>
      <div class="bg-gray-800 text-white h-10 py-2 px-2 mt-2 flex justify-between">
        <Footer footer="Copyright @2022 | CodeYogi"></Footer>
        <Footer footer="Powered By CodeYogi"></Footer>
      </div>
    </div>
  )







}

export default App;  