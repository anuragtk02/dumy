import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-[#F2EFE9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-bold font-cursive text-center leading-tight text-terracotta-700 mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#73937E]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full border border-[#D68B6D] rounded-md shadow-sm focus:outline-none focus:border-[#D68B6D] focus:ring focus:ring-[#D68B6D] focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#73937E]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full border border-[#D68B6D] rounded-md shadow-sm focus:outline-none focus:border-[#D68B6D] focus:ring focus:ring-[#D68B6D] focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-[#73937E]">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full border border-[#D68B6D] rounded-md shadow-sm focus:outline-none focus:border-[#D68B6D] focus:ring focus:ring-[#D68B6D] focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-[#D68B6D] hover:bg-[#C77B5D] text-[#F5F5F5] font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
