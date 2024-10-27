import React from 'react'
import { products } from '@/constants'
import CardMarket from '@/components/CardMarket'

export default function page() {
  return (
    <div>

          
                <div  className='grid grid-cols-4 gap-4 ml-4 mt-32'>
                {products.map((product,index)=>(
                    
                      
                    <div className='' key={index}>
                           <CardMarket name={product.name} image={product.image} price={product.prix}/>

                    </div>                   
                ))
              }
                </div>
          
            
    </div>
  )
}
