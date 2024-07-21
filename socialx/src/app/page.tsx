
'use client'
import React, {useEffect} from 'react'
import axios from 'axios'
import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Hero from '@/components/Hero';
import MobNavbar from '@/components/MobNavbar';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
export default function Home() {
  const API_URL = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category';

  useEffect(() => {
    const fetchProducts = async (category: string) => {
      const response = await axios.get(`${API_URL}`, {
        params: {
          category_id: category,
          query: 'Phone',
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
    console.log(response)
    return response.data;
  };
    fetchProducts('2478868012')
  }, [])

  return (
    <main>
      <HeaderTop />
      <Navbar />
      <MobNavbar />
      <Hero />
      <ProductCard />
      <Footer /> 
    </main>
  );
}