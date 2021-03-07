import React from 'react'
import "../styles/laptopList.css"


function LaptopList() {
    return (
        <div className="user_list">
        
            <div className="laptop_heading">
                <div className="left">
                <span className="user_span">
                    Laptops
                </span>

                <span><button className="view_button"><div className="view_text">Company</div> All </button></span>
                </div>
                <div className="right">
                <span className="button">
                    <img  className="filter_icon" src={process.env.PUBLIC_URL + '/assests/filter.png'} />
                </span>
                <span className="button" >
                    <img className="refresh_icon" src={process.env.PUBLIC_URL + '/assests/refresh.png'} />
                </span>
                <span className="button" >
                    <img className="settings_icon" src={process.env.PUBLIC_URL + '/assests/settings.png'} />
                </span>
                </div>
            </div>
        </div>
    )
}

export default LaptopList
