import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  
  return (
    <React.Fragment>
    <hr/>
    <h2>{keg.name} Made By {keg.brewery}</h2>
    <p>abv {keg.abv}</p>
    <h3>price {keg.price}</h3>
    <p>{keg.pintsLeft} total pints left</p> {/* Make this a percentage */}
    <hr/>
    <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
  </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;