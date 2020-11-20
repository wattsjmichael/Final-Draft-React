import React from "react";
import Keg from "./Keg";

function KegList(){
  return(
    <React.Fragment>
    <Keg
    name = "Boneyard IPA"
    brand = "Boneyard"
    price = "$5.50"
    abv = "7.3%"
    pintsLeft = "127" />
    <Keg
    name = "Best Day Ever"
    brand = "Brothers Cascadia"
    price = "$6.00"
    abv = "7.1%"
    pintsLeft = "63" />
    </React.Fragment>
  );
}

export default KegList;
