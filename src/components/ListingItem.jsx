import React, { useState, useEffect } from 'react';
import right_arrow_icon from '../icons/right_arrow_icon.svg'
import hide_icon from '../icons/hide_icon.svg'
import shortlist2_icon from '../icons/shortlist2_icon.svg'
import shortlist2_icon_yellow from '../icons/shortlist2_icon_yellow.svg'
import report_icon from '../icons/report_icon.svg'


function ListingItem({ listing, isEven }) {
  const [isShortlisted, setisShortlisted] = useState(true);

  useEffect(() => {
    // Update rating display
    const starp = (listing.rating / 5) * 100;
    const starpr = starp + '%';
    const ratingInner = document.querySelector(`#listing-${listing._id} .rating .rating-inner`);
    // console.log(ratingInner)
    if (ratingInner) {
      ratingInner.style.width = starpr;
    }
  }, [listing]);

  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
}

  useEffect(() => {
    if(getCookie(`listing-${listing._id}`) === 'done'){
      setisShortlisted(false)
    }
  }, [])
  

  function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
  
    const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  function shortlist_fun(id_name) {
    
        if (isShortlisted === false) {
            deleteCookie(id_name);
        } else {
            setCookie(id_name, "done", 200);
        }
  }


  return (

    <div>
    <div id={`listing-${listing._id}`} className={`row  justify-content-between border-bottom all_design ${!isEven ? 'even-row' : 'odd-row'}`}>
    <div className="col-8 my-3 mx-3 ratc px-0" >
                  <h4 className="design_name">{listing.design_name}</h4>

                  <div className="rating inratc">
                    <div className="rating-inner"></div>
                  </div>

                  <p className="design_ele_p">{listing.desc}</p>
                  <div className="d-flex flex-row fw-bold">
                    <div className="text-center mx-3">
                      <h4 className="design_detail">{listing.project}</h4>
                      <p className="design_detail_p">Projects</p>
                    </div>
                    <div className="text-center mx-3">
                      <h4 className="design_detail">{listing.year}</h4>
                      <p className="design_detail_p">Years</p>
                    </div>
                    <div className="text-center mx-3">
                      <h4 className="design_detail">{listing.price}</h4>
                      <p className="design_detail_p">Price</p>
                    </div>
                  </div>

                  <h4 className="design_ele_p">{listing.ph1}</h4>
                  <h4 className="design_ele_p">{listing.ph2}</h4>
                </div>
                <div className="col-2 text-danger px-1 my-3 border-start">
                  <div className="text-center my-4">
                    <img src={right_arrow_icon} style={{width: "20px", height: "22px"}} />
                    <p style={{fontSize: "10px", margin: "0"}}>Details</p>
                  </div>
                  <div className="text-center my-4">
                    <img src={hide_icon} style={{width: "20px", height: "22px"}} />
                    <p style={{fontSize: "10px", margin: "0"}}>Hide</p>
                  </div>
                  <div className="text-center my-4 shortlist_c" >
                    {
                      isShortlisted?
                    <img src={shortlist2_icon} className="originalIconshort" style={{width: "20px", height: "22px"}} onClick={()=> {setisShortlisted(false); shortlist_fun(`listing-${listing._id}`)}} />
                      :
                    <img src={shortlist2_icon_yellow} className="modifiedIconshort" style={{width: "20px", height: "22px"}} onClick={()=> {setisShortlisted(true); shortlist_fun(`listing-${listing._id}`)}} />
                    }
                    <p style={{fontSize: "10px", margin: "0"}}>Shortlist</p>
                  </div>
                  <div className="text-center my-4">
                    <img src={report_icon} style={{width: "20px", height: "22px"}} />
                    <p style={{fontSize: "10px", margin: "0"}}>Report</p>
                  </div>
                </div>
    </div>
    </div>
  
  );
}

export default ListingItem;
