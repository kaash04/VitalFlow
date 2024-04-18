// import './App.css';
// import Add from './components/Add';
// import Get from './components/Get';
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//     {/* <Add/> */}
//     {/* <Get/> */}
//     <Home/>
//     </>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Get from './components/Get';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Add" element={<Add/>} />
          <Route path="/Get" element={<Get/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
