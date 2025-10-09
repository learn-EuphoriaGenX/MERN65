import axios from 'axios';
import React, { useEffect, useState } from 'react';
import left from '../assets/l-arrow.png';
import ProductCard from './ProductCard';

function Deals() {
  const [products, setProducts] = useState([]);

  async function fetchDeals() {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      const topProducts = data.products.slice(0, 6);
      setProducts(topProducts);
      console.log(topProducts);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="border-b-2 border-cyan-500 font-semibold">
          Grab the best deal on Products
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-cyan-500 font-medium">View All</span>
          <img src={left} alt="arrow" className="rotate-180 w-4 h-4" />
        </div>
      </div>

      {/* Product List */}
      <div className="flex gap-4 overflow-x-auto">
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            name={item.title}
            price={`$${item.price}`}
            disPrice={`$${(item.price + item.price * 0.1).toFixed(2)}`} // example
            off={`${item.discountPercentage}% OFF`}
            thumbnail={item.images[0]}
            save={`$${Math.floor(item.price * 0.2)}`} // example save
          />
        ))}
      </div>
    </div>
  );
}

export default Deals;
