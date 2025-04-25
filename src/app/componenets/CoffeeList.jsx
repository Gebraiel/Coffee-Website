"use client"
import React, { useState } from 'react'
import Button from "./Button.jsx";
import Product from './Product.jsx';
export default function CoffeeList({products}) {
  const[renderedProducts,setRenderedProducts] = useState(products);
  const[activeButton,setActiveButton] = useState('ALL');
  function getAvailableProducts(){
    setRenderedProducts(products.filter((product)=>product.available));
    setActiveButton("AVAILABLE");
  }
  function getAllProducts(){
    setRenderedProducts(products);
    setActiveButton("ALL");
  }
  return (
    <div>
        <div className='flex justify-center gap-5 my-5'>
          <Button action={getAllProducts} active={activeButton == "ALL"}>All Products</Button>
          <Button action={getAvailableProducts} active={activeButton == "AVAILABLE"}>Available</Button>
        </div>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {renderedProducts.map((product)=>
            <Product product={product} key={product.id}/>
          )
        }
        </div>
        
    </div>
  )
}
