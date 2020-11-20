import React from "react";

function Keg(props){
    
  return (
    <React.Fragment>
      <hr/>
      <h2>{props.name} Made By {props.brand}</h2>
      <p>abv {props.abv}</p>
      <h3>price {props.price}</h3>
      <p>{props.pintsLeft} total pints left</p> {/* Make this a percentage */}
      <hr/>
    </React.Fragment>
  )
}

export default Keg;