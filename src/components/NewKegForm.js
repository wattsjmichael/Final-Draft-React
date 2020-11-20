import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, price: event.target.price.value, abv: event.target.abv.value, pintsLeft: event.target.pintsLeft.value, id: v4()});
    
  }
  return (
    <React.Fragment>
      <h2>Add a new keg</h2>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Beer Name" />
        <input
          type="text"
          name="brewery"
          placeholder="Brewery Name" />
        <input
          type="text"
          name="price"
          placeholder="$ Price" />
        <input
          type="text"
          name="abv"
          placeholder="Alcohol Content" />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Total Number of Pints" />
          <button type="submit">Add a Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;