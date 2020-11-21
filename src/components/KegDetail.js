import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onSellingPint } = props;
  
  return (
    <React.Fragment>
    <hr/>
    <h2>{keg.name} Made By {keg.brewery}</h2>
    <p>abv {keg.abv}</p>
    <h3>price {keg.price}</h3>
    <p>{keg.pintsLeft} total pints left</p> {/* Make this a percentage */}
    <hr/>
    <button onClick={ props.onClickingEdit }>Update Keg</button>
    <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
    <button onClick={()=> onSellingPint(keg.id)}>Sell A Pint!</button>
  </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit:PropTypes.func,
  onSellingPint:PropTypes.func
}

export default KegDetail;