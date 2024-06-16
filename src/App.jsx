import React from 'react'
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import divider from './assets/divider.svg'

function App() {
  return (
    <div className="App bg-soft-beige" >
      <Navbar />
      <main>
        <section id="home bg-soft-beige" >
          <ImageSlider />
          <div className=" container mx-auto pt-4">
            <h1 className="text-4xl font-bold font-cursive text-center">Welcome to Handmade Crafts!</h1>
            
          </div>
          <img src={divider} alt="divider" className=" h-auto w-40 mx-auto " />      
            </section>

        
        
         
          <ProductShowcase />
     
          <img src={divider} alt="divider" className=" h-auto w-40 mx-auto " />      

        <AboutSection />
        <img src={divider} alt="divider" className=" h-auto w-40 mx-auto " />      

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
