import React, { useEffect } from 'react';

function ListingItem({ listing }) {
  useEffect(() => {
    // Update rating display
    const starp = (listing.rating / 5) * 100;
    const starpr = `${starp}%`;
    const ratingInner = document.getElementById(`listing-${listing.id}-inner`);
    if (ratingInner) {
      ratingInner.style.width = starpr;
    }
  }, [listing]);

  return (
    <div id={`listing-${listing.id}`} className="row even-row justify-content-between border-bottom all_design">
      {/* Your listing item content */}
    </div>
  );
}

export default ListingItem;
