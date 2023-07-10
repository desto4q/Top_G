import React, { useEffect } from 'react'

function Conclusion() {
    useEffect(() => {
        console.log("gg")
    }, [])


    return (
        <div className="conclusion">
            <div className="c_card">
            </div>
            <div className="c_card"></div>
            <div className="c_card">
                <div className="content">
                    <h2>Secure Nft Trading</h2>
                    <p>An Nft is a unit of  data stored on a digital ledger, called a blockchain</p>
                    <a href="">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Conclusion