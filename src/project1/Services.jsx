import React from 'react';



function Services() {
    return (
        <section id="about" className="bg-black text-white py-10 px-6 md:rounded-tr-[5rem] md:rounded-bl-[5rem] mt-3">
        <h1 className="text-4xl font-semibold text-blue-700 text-center mb-20 ">BEST SERVICES</h1>
        
        <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center max-w-6xl mx-auto">
        
          <div className="w-[80%] md:w-[28%] hover:scale-110 transition-all duration-200 cursor-pointer bg-white text-black py-6 rounded-lg flex flex-col justify-center text-center items-center space-y-6">
            <h1 className="text-5xl font-bold">Basic</h1>
            <div className="space-y-3">
              <p className="text-xl">$<span className="text-5xl font-bold">20</span>/month</p>
              <p>Responsive Website</p>
              <p>Free Name</p>
              <p>Mobile Friendly</p>
              <p>Webmail Free</p>
              <p>Customer Support</p>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-700 transition">Purchase</button>
          </div>
      
          <div className="w-[80%] md:w-[28%] hover:scale-110 transition-all duration-200 cursor-pointer bg-white text-black py-6 rounded-lg flex flex-col justify-center text-center items-center space-y-6">
            <h1 className="text-5xl font-bold">Standard</h1>
            <div className="space-y-3">
              <p className="text-xl">$<span className="text-5xl font-bold">40</span>/month</p>
              <p>Responsive Website</p>
              <p>Free Name</p>
              <p>Mobile Friendly</p>
              <p>Webmail Free</p>
              <p>Customer Support</p>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-700 transition">Purchase</button>
          </div>
      
          <div className="w-[80%] md:w-[28%] hover:scale-110 transition-all duration-200 cursor-pointer bg-white text-black py-6 rounded-lg flex flex-col justify-center text-center items-center space-y-6">
            <h1 className="text-5xl font-bold">Unlimited</h1>
            <div className="space-y-3 bg-slate-100 w-full rounded-lg">
              <p className="text-xl">$<span className="text-5xl font-bold">60</span>/month</p>
              <p>Responsive Website</p>
              <p>Free Name</p>
              <p>Mobile Friendly</p>
              <p>Webmail Free</p>
              <p>Customer Support</p>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-700 transition">Purchase</button>
          </div>
        </div>
      </section>
    );
}

export default Services;


