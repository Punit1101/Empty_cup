import React from 'react';
import ListingItem from './ListingItem';
import { useEffect } from 'react';

function EmployeeRating({ listings }) {
  
  
let isEven = true
  return (
    <div className="container all_design_container" id="listings-container">
    
      {listings.map(listing => (
        <>
        <ListingItem key={listing._id} listing={listing} isEven={isEven} />
        {isEven=!isEven}
        </>
        
      ))}
    </div>
  );
}

export default EmployeeRating;
