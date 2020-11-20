import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
    <div onClick= {() => props.whenKegClicked(props.id)}>
    <hr/>
    <h2>{keg.name} Made By {keg.brewery}</h2>
    <p>abv {keg.abv}</p>
    <h3>price {keg.price}</h3>
    <p>{keg.pintsLeft} total pints left</p> {/* Make this a percentage */}
    <hr/>
    </div>
  </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;