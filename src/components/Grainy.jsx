import React from 'react'

function Grainy() {
    // return (
    //     <svg className='filter'>
    //         <filter id='grainy'>
    //             <feTurbulence type='turbulence' baseFrequency={0.5} />

    //         </filter>
    //     </svg>
    // )
    return (
        <svg className='filter'>

            <filter id="grainy">
                <feTurbulence type="turbulence" baseFrequency="0.555" result="turbulence">
                </feTurbulence>
            </filter>
            <rect width='100%' height='100%' filter='url(#filter)'/>
        </svg>
    )
}

export default Grainy

