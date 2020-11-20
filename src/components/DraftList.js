import React from "react";
import Keg from "./Keg";

const fullKegList = [
  {  
    name : "Boneyard IPA",
    brand : "Boneyard",
    price : "$5.50",
    abv : "7.3%",
    pintsLeft : 127
  },
  {
    name : "Best Day Ever",
    brand : "Brothers Cascadia",
    price : "$6.00",
    abv : "7.1%",
    pintsLeft : 63 
  },
  {
    name : "The Abyss",
    brand : "Deschutes Brewery",
    price : "$12.00",
    abv : "11.4%",
    pintsLeft : 11  
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {fullKegList.map((keg, index)=>
      <Keg
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      abv={keg.abv}
      pintsLeft={keg.pintsLeft}
      key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;
