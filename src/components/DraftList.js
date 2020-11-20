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



function DraftList(props){
  return (
    <React.Fragment>
      
      {props.draftList.map((keg) =>
      <Keg
        whenKegClicked = { props.onKegSelection}
        name={keg.name}
        brewery={keg.brewery}
        price={keg.price}
        abv={keg.abv}
        pintsLeft={keg.pintsLeft}
        id = {keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

DraftList.propTypes = {
  draftList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default DraftList;
