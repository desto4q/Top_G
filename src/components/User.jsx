import React, { useEffect } from 'react'

function User({avatar,fullname,displayname}) {
 
    return (
        <div className="user">
            <img src={avatar && avatar} alt="" />
            <div className="info">
                <h5>{fullname && fullname}</h5>
                <p>{displayname && displayname}</p>
            </div>
            <div className="icon">
                . . .
            </div>
        </div>
    )
}

export default User