import React from 'react'
import "../styles/userSummary.css"
import SummaryHead from './SummaryHead'

function UserSummary(props) {
    return (
        <div className="user_summary">
            
                <SummaryHead id={props.id} />

                <div className="row">
                    <div className="column">
                    <label className="head">Full Name</label>
                    </div>
                    <div className="column">
                    <p className="text">Administrator</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="head">User Name</label>
                    </div>
                    <div className="column">
                    <p className="text">Admin</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="head">Email</label>
                    </div>
                    <div className="column">
                    <p className="text">&nbsp;</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="head">Password</label>
                    </div>
                    <div className="column">
                    <p className="text">&nbsp;</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="head">User Group</label>
                    </div>
                    <div className="column">
                    <p className="text"><a href="">masters, edge users</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="head">Plan</label>
                    </div>
                    <div className="column">
                    <p className="text">No plan is found.</p>
                    </div>
                </div>
            
        </div>
    )
}

export default UserSummary
