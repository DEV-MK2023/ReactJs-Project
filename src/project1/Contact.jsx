import React from 'react';

function Contact() {
  return (
    <section id="contact" className='bg-black text-white py-7 px-6 mt-5 md:rounded-tr-[5rem] md:rounded-bl-[5rem]'>
      <h1 className='text-4xl font-semibold underline text-center mb-10'>Contact Us</h1>
      <form action="">
        <div className='bg-black text-black p-6 rounded shadow w-[90%] md:w-[60%] mx-auto'> 
        <label className='text-white' htmlFor="">User Name:</label>
          <input type="text" placeholder='Username' className='border p-2 w-full mb-4 rounded-md' required/>
          <label className='text-white' htmlFor="">Email:</label>
          <input type="email" placeholder='Email Address' className='border p-2 w-full mb-4 rounded-md' required/>
          <label className='text-white' htmlFor="">Message:</label>
          <textarea placeholder='Message' className='border p-2 w-full mb-4 rounded-md' rows='4'></textarea>
          <button className='bg-blue-800 text-white px-6 py-2 rounded ' type="submit">Reset</button>
          <button className='bg-slate-600 text-white px-6 py-2 rounded ml-3' type="submit">Submit</button>
        </div>
        </form>
    </section>
  );
}

export default Contact;