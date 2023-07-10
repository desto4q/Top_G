import React from 'react'
import { footer_content } from '../data/data'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="icon_content">
                    {/* <img src="" alt="" /> */}
                    <h2>logo</h2>
                    <p>Every Tree in the forest knows about creating value,and about reciprocity and about stewardship</p>
                </div>

                {footer_content.map(({ title, tile }) => {
                    return (
                        <div className="footer_content">
                            <h3>{title}</h3>
                            <div className="content">
                                {tile.map((item) => {
                                    return (
                                        <p>
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div className="newsletter">
                    <h2>Subscribe to our Newsletter</h2>
                    <div className="input">
                        <input type="text" placeholder='Enter your email' />
                        <button className='button'>
                            send
                        </button>
                    </div>
                    <div className="links">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer