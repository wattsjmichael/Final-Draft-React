import React from "react";

function Keg(){
  const name = "Boneyard IPA";
  const brand = "Boneyard";
  const price = "5.50";
  const abv = "7.3%"
  const pintsLeft = 127;
  
  return (
    <React.Fragment>
      <hr/>
      <h2>{name} Made By {brand}</h2>
      <p>abv {abv}</p>
      <h3>price {price}</h3>
      <p>{pintsLeft} total pints left</p> {/* Make this a percentage */}
    </React.Fragment>
  )
}

export default Keg;