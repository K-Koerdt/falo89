import React from 'react'
import './Welcome.scss'

export const Welcome = () => {
    return (
<>
<div className="container__welcome">
        <div className="container__welcome__h1">
            <h1 style={{paddingTop: "1em"}}>Herzlich</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{paddingBottom: "1em", color: "orange"}}>Willkommen</h1>
            </div>
        </div>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
</div>
</>
    )
}