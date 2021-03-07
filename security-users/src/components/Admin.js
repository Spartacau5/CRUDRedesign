import React from 'react'
import Laptops from './Laptops'
import UserSummary from './UserSummary'
import AssociatedEntities from './AssociatedEntities.js'
import '../styles/admin.css'

function Admin({match}) {
    console.log(match.params.id);
    return (
        <div>
            <div className="outer_div">
                <div className="tree">
                    <h5 className="header"><span className="security">Security / User</span> / Admin</h5>
                </div>
                <div className="div_row"> 
                    <div className="div_column">
                        <UserSummary id={match.params.id}/>
                    </div>
                    <div className="double_column entity">
                        <AssociatedEntities />
                    </div>
                </div>
            </div>
            <div>
                <Laptops />
            </div>
        </div>
    )
}

export default Admin
