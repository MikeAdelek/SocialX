// import React from 'react'
// import { useEffect, useState } from 'react';
// import { fetchProducts } from '@/services/API';
// import ProductCard from '@/components/ProductCard';

// interface Product {
//   id: string;
//   title: string;
//   price: number;
// }

// const Home = () => {
//   const [products, setProducts ] = useState<Product[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const data = await fetchProducts('electronics');
//       setProducts(data);
//     };
//     getProducts();
//   }, []);

//   return (
//     <div>
//       {products.map((product => (
//         <ProductCard key={product.id} product={product} />
//       )))}
//     </div>
//   );
// }

// export default Home;