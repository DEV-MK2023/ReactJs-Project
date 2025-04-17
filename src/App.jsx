import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { Outlet } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="font-sans bg-gradient-to-br from-sky-50 to-blue-100 text-gray-900 min-h-screen">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './project1/Navbar';
// import Home from './project1/Home';
// import About from './project1/About';
// import Services from './project1/Services';
// import Team from './project1/Team';
// import Contact from './project1/Contact';
// import Footer from './project1/Footer';


// function App() {
//   return (
//     <Router>
//       <div className="font-sans bg-gradient-to-br from-sky-50 to-blue-100 text-gray-900 min-h-screen">
//         <Navbar />
//         <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/services" element={<Services />} />
//          <Route path="/team" element={<Team />} />
//          <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
