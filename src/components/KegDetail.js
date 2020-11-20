import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
    <div onClick= {() => props.whenKegClicked(props.id)}>
    <hr/>
    <h2>{props.name} Made By {props.brand}</h2>
    <p>abv {props.abv}</p>
    <h3>price {props.price}</h3>
    <p>{props.pintsLeft} total pints left</p> {/* Make this a percentage */}
    <hr/>
    </div>
  </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;