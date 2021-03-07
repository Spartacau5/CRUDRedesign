import React from 'react'
import "../styles/entityHead.css"
import { Link } from 'react-router-dom';




function EntityHead() {
    return (
        <div className="entity_head">
            <div className="entity_heading">
                <div className="left">
                <h5 className="user head">
                    Associated Entity 
                </h5>
                </div>
                <div className="right"> 
                <span><button className="view_entity">Show Inherited Associations </button></span>
                <span className="button">
                    <Link to="/">
                        <img  className="search_icon" src={process.env.PUBLIC_URL + '/assests/search.png'} />
                    </Link>
                </span>
                <span className="button">
                    <img  className="filter_icon" src={process.env.PUBLIC_URL + '/assests/filter.png'} />
                </span>

                <span className="button" >
                    <img className="settings_icon" src={process.env.PUBLIC_URL + '/assests/settings.png'} />
                </span>
                </div>
            </div>
        </div>
    )
}

export default EntityHead
