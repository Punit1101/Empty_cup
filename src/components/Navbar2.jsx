import React, { useState } from 'react';
import contractIcon from '../icons/contract_icon.svg'
import gallery_icon from '../icons/gallery_icon.svg'
import map_icon from '../icons/map_icon.svg'
import shortlist_icon from '../icons/shortlist_icon.svg'
import shortlist_icon_yellow from '../icons/shortlist_icon_yellow.svg'
import sort_icon from '../icons/sort_icon.svg'


function Navbar2({ onShortlistAllClick }) {

    const [isShortlisted, setisShortlisted] = useState(true)
    const [check_sort, setcheck_sort] = useState(false)
    let isEven= false;
    let isEven2 = false;
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

    function shortlist_all_fun(){
        var elements = document.getElementsByClassName('all_design');

        if(check_sort){
            
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('show_none');

                if(isEven){
                    elements[i].classList.add('even-row');
                    elements[i].classList.remove('odd-row');
                    // setisEven(false);
                    isEven= false;
                }
                else{
                    elements[i].classList.add('odd-row');
                    elements[i].classList.remove('even-row');
                    // setisEven(true);
                    isEven= true;
                }
                
            }
            setcheck_sort(false)
        }
        else{
            
            for (let i = 0; i < elements.length; i++) {
                if(getCookie(elements[i].id) === 'done'){
                    if(isEven2){
                        elements[i].classList.add('even-row');
                        elements[i].classList.remove('odd-row');
                        isEven2= false;
                    }
                    else{
                        elements[i].classList.add('odd-row');
                        elements[i].classList.remove('even-row');
                        isEven2= true;
                    }
                    
                }
                else{
                    elements[i].classList.add('show_none');
                }
            }
            setcheck_sort(true)
        }
    }

  return (
    <div className="container border-bottom " >
        <div className="row" style={{height: "72px"}}>
            <div className="col text-start d-flex flex-row align-items-center px-0"> 
                <div className="text-center mx-3">
                    <img src={contractIcon} className="nav_icon"/>
                    <p className="nav_p">Contract</p>
                </div>
                <div className="text-center mx-3">
                    <img src={gallery_icon}  className="nav_icon" />
                    <p className="nav_p">Gallery</p>
                </div>
                <div className="text-center mx-3">
                    <img src={map_icon} className="nav_icon" />
                    <p className="nav_p">Map</p>
                </div>
            </div>
            <div className="col justify-content-end d-flex flex-row align-items-center px-0">
                <div className="text-center mx-3" id="nav_short" >

                    {
                        isShortlisted ?
                    <img src={shortlist_icon} className="nav_icon" id="originalIcon"  onClick={()=> {setisShortlisted(false); shortlist_all_fun()}}/>
                        :
                    <img src={shortlist_icon_yellow} className="nav_icon" id="modifiedIcon"  onClick={()=> {setisShortlisted(true); shortlist_all_fun()}} />
                    }
                    
                    <p className="nav_p">Shortlist</p>
                </div>
                <div className="text-center mx-3">
                    <img src={sort_icon} className="nav_icon"/>
                    <p className="nav_p">Sort</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Navbar2;
