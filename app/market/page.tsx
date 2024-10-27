import React from 'react'
import { products } from '@/constants'
import CardMarket from '@/components/CardMarket'
import Heading from '@/components/Heading'

export default function page() {
  return (
    <div className='text-black dark:text-white py-32'>
      <Heading
        tag="Marketplace"
        title="Browse here all the recycled plastic product made by our partners"
      />
      <div className='grid grid-cols-4 gap-4 ml-4'>

        {products.map((product, index) => (
          <div className='' key={index}>
            <CardMarket name={product.name} image={product.image} price={product.prix} />
          </div>
        ))
        }
      </div>
    </div>
  )
}
