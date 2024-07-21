'use client'

import React from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';

const API_URL = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category';
export const fetchProducts = async (category: string) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      category_id: category,
      query:'Phone',
      page: '1',
      country: 'US',
      sort_by: 'RELEVANCE',
      product_condition: 'ALL'
    },
    headers: {
      'x-rapidapi-key': '106176d2aamsh932f1483185c96dp15a3cejsn8d56afa04585',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
});
return response.data;
};

interface Product {
  category_id: string;
  query: string;
  title: string;
  price: number;
  image: string;
}
const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   const response = async() => dispatch( await fetchProducts('2478868012'))
  //   console.log(response)
  // },
  //  [dispatch])

  useEffect(() => {
    const fetchProducts = async (category: string) => {
      const response = await axios.get(`${API_URL}`, {
        params: {
          category_id: category,
          query:'Phone',
          page: '1',
          country: 'US',
          sort_by: 'RELEVANCE',
          product_condition: 'ALL'
        },
        headers: {
          'x-rapidapi-key': '106176d2aamsh932f1483185c96dp15a3cejsn8d56afa04585',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    });
    return response.data;
    };
    fetchProducts('2478868012')
  }, [])
  
    

  // .then((data) => setProducts(data.products)));

  return(
    <div className="new-products">
      Hello
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          detail={category_id}
          image={product.query}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  )
};

export default NewProducts;
