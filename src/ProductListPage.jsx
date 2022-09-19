import React ,{useState, useEffect} from 'react';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import { getProductList } from './api';
import Loading from './Loading';

function ProductListPage(){
  const [productlist , setProductList] = useState([]);
  const [loading,setLoading] = useState(true);

  
  useEffect(function(){
    const p = getProductList();
    p.then(function(products){
      setProductList(products);
      setLoading(false);
    });
      
    
  },[]);
  
   const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  
  
  let data = productlist.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  }
  );
  if (sort == "priceIncreasing") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });



  } else if (sort == "priceDecreasing") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
    
}

  else if (sort == "title") {
    data.sort(function(x, y) {
      return (x.title > y.title) ? 1 : -1;
    });
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  if(loading){
    return <Loading/>
  } ;
  
  return (
    <div>

      
      <div className="bg-white mt-6 max-w-6xl mx-auto  ">
        <div className="flex flex-col lg:flex-row py-4 justify-end mx-2 ">
          <input className="border mr-2 border-gray-700 rounded-md "
            value={query}
            placeholder="search"
            onChange={handleQueryChange}>
          </input>
          <select className="mt-2 border rounded-md " onChange={handleSortChange}
            value={sort}>
            <option value="default">Default sorting</option>
            <option value="title">Sort by title</option>
            <option value="priceIncreasing">Sort by price:low to high</option>
            <option value="priceDecreasing">Sort by price:high to low</option>
          </select></div>
        {data.length > 0  && <ProductList products={data} />}
    {data.length == 0 && <NoMatching>No matching product found</NoMatching> }
  
       
        </div>
     </div>
    )
}
 export default ProductListPage;