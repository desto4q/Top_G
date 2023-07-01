import React from 'react'

function NFT_hero({avatar,fullname,username,items,owners,traded,bg}) {
    return (
        <div className="nft_hero">
            <div className="container">
                <div className="holder">
                    <img src={bg && bg} alt="" />
                    <div className="avatar">
                        <img src={avatar && avatar} alt="" />
                    </div>
                    <div className="info">
                        <h5>{fullname && fullname}</h5>
                        <p>@ {username && username}</p>
                    </div>
                </div>
                <div className="details">
                    <div className="text">
                        <h5>{items  && items } k</h5>
                        <p>items</p>
                    </div>
                    <div className="v1"></div>
                    <div className="text">
                        <h5>{owners && owners}k</h5>
                        <p>owners</p>
                    </div>
                    <div className="v1"></div>
                    <div className="text">
                        <h5>{traded && traded}</h5>
                        <p>traded</p>
                    </div>a
                </div>
            </div>
        </div>
    )
}

export default NFT_hero