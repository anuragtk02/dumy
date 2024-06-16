import React from 'react';
import { Parallax } from 'react-parallax';
import bag from '../assets/bag.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="bg-soft-beige py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-bold leading-tight font-cursive text-center text-terracotta-700 mb-2">About Us</h2>
          <p className="text-xl font-serif text-muted-green leading-relaxed">
          Discover unique handmade crafts that celebrate creativity and craftsmanship. At Handmade Crafts, we curate a collection of artisanal treasures, each crafted with passion and skill. Every piece tells a story and supports talented artisans worldwide. Join us in exploring the beauty of handmade crafts and find something special that speaks to you.


          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="max-w-lg w-full">
            <Parallax bgImage={bag} strength={300} className="rounded-lg overflow-hidden shadow-lg">
              <div style={{ height: '400px' }} className="flex items-center justify-center">
                
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
