import React from 'react';
import { Parallax } from 'react-parallax';



import mug from '../assets/mug2.jpg';
import jewelry from '../assets/jwellery.jpg';
import pottery from '../assets/pottery.jpg';

const products = [
  {
    id: 1,
    name: 'Handcrafted Mug',
    image: mug,
    description: 'Earthy tones, textured surface, ergonomic handle, perfect for cozy mornings and evening tea.',
  },
  {
    id: 2,
    name: 'Artisanal Jewelry',
    image: jewelry,
    description: 'Intricate designs, quality materials, unique pieces to adorn and cherish, perfect for any occasion.',
  },
  {
    id: 3,
    name: 'Customized Pottery',
    image: pottery,
    description: 'Handcrafted pottery combines artistry and function, shaping unique, beautiful pieces from clay with skilled hands.',
  },
];

const ProductShowcase = () => {
  return (

    <div className="max-w-7xl mx-auto py-8 bg-soft-beige">
      <section id='products' className='bg-soft-beige'>
       <h2 className="text-4xl text-terracotta-700 font-bold font-cursive text-center py-8">Our Products</h2>
       <p className="text-xl text-muted-green font-serif leading-relaxed text-center py-2 mb-3">
       Discover the beauty of artisan craftsmanship.


          </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Parallax key={product.id} bgImage={product.image} strength={300} className="rounded-lg overflow-hidden">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="mt-2">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </Parallax>
        ))}
      </div>
      </section>
      
    </div>
  );
};

export default ProductShowcase;
