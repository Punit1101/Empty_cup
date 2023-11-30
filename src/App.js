import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import EmployeeRating from './components/EmployeeRating';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://emptycupapi.onrender.com/') // Assuming data.json contains your listings data
      .then(response => response.json())
      .then(data => {setListings(data) ;})
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="wrap mx-auto">
      <Navbar />
      <Navbar2 onShortlistAllClick={() => {}} />
      <EmployeeRating listings={listings} />
    </div>
  );
}

export default App;
