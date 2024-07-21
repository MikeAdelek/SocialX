import React from 'react'
import Image from 'next/image'

interface propsType {
  category_id: string;
  query: string;
  title: string
  price: number;
  image: string;
}
const ProductCard: React.FC<propsType> = ({category_id, title, price, query}) => {
  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
      <div>
        <Image 
          className='w-full h-auto'
          src={query}
          width={200}
          height={200}
          alt='title'
        />
      </div>
    </div>

  )
}
export default ProductCard