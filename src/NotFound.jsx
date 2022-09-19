import React from 'react';
  import {Link} from 'react-router-dom';
function NotFound (){
  return( <div>
    
      <h1 className="text-3xl text-center text-primary-default font-bold">SORRY ! PAGE NOT FOUND ! </h1>
   <h2 className="text-2xl text-center font-bold">Error 404 occured !</h2> 
    <div className="flex items-center justify-center mt-4">
         <Link  className="bg-primary-default text-white rounded-md p-2 "to ='/'>Go Home</Link></div>
    <img className="h-96"src="https://imgs.search.brave.com/mK3lQO6-ObpvRQTxGCZknZ9BgCf7xrnMoFuMr1GB_8I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amluZy5mbS9jbGlw/aW1nL2Z1bGwvMTMx/LTEzMTc4NzhfbW9u/a2V5LXBuZy1pbWFn/ZXMtbW9ua2V5LWNs/aXBhcnQtaGFuZ2lu/Zy1tb25rZXktY2xp/cGFydC5wbmc"/></div>);
}
 export default NotFound;