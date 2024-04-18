// import React from 'react'

// function Home() {
//     return (
//         <>
//             <div class="cont">
//                 <h1 style={{marginTop:'5rem'}}>Welcome to our Blood Donation Website</h1>
//                 <p>Are you looking to save lives or find donors?</p>
//                 <div style={{display: 'inline-block'}}>
//                 <button style={{marginRight: '2rem'}}>Register as Donor</button>
//                 <button>Search for Donors</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home


import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="cont">
      <h1 style={{ marginTop: '5rem' }}>Welcome to our Blood Donation Website</h1>
      <p>Are you looking to save lives or find donors?</p>
      <div style={{ display: 'inline-block' }}>
        <Link to="/Add" style={{ marginRight: '2rem', textDecoration: 'none' }}><button>Register as Donor</button></Link>
        <Link to="/Get" style={{ textDecoration: 'none' }}><button>Search for Donors</button></Link>
      </div>
    </div>
  );
}

export default Home;
