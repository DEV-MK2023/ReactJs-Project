import React from 'react';

function Contact() {
  return (
    <section id="contact" className='bg-slate-700 text-white py-16 px-6'>
      <h1 className='text-4xl font-semibold underline text-center mb-10'>Contact Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        <div className='bg-black p-6'>
          <h2 className='text-yellow-400 text-2xl mb-4'>CONTACT US FORM</h2>
          <p className='text-sm text-gray-300'>We are always open to new ideas and collaboration. Let’s talk!</p>
        </div>
        <div className='bg-white text-black p-6 rounded shadow'>
          <input type="text" placeholder='Your Name' className='border p-2 w-full mb-4' />
          <input type="email" placeholder='Email Address' className='border p-2 w-full mb-4' />
          <textarea placeholder='Message' className='border p-2 w-full mb-4' rows='4'></textarea>
          <button className='bg-slate-600 text-white px-6 py-2 rounded'>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;