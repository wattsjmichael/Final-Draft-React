import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

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



function FullDraftList(props){
  return (
    <React.Fragment>
      
      {props.draftList.map((keg)=>
      <Keg
        whenTicketClicked = { props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        pintsLeft={keg.pintsLeft}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

FullDraftList.propTypes = {
  fullDraftList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default FullDraftList;
