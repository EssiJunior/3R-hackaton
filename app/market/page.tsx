import React from 'react'
import { products } from '@/constants'
import CardMarket from '@/components/CardMarket'
import Heading from '@/components/Heading'

export default function page() {
  return (
    <main className=' mx-auto sm:px-10 px-5'>

      <div className='text-black dark:text-white py-32 lg:w-5/6  max-w-7xl mx-auto'>
        <Heading
          tag="Marketplace"
          title="Browse here all the recycled plastic product made by our partners"
        />
        <div className='flex flex-wrap items-center justify-center gap-4 px-1'>

          {products.map((product, index) => (
            <CardMarket name={product.name} image={product.image} price={product.prix} key={index} />
          ))
          }
        </div>
      </div>

    </main>
  )
}
