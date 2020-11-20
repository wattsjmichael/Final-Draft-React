import React from "react";
import { v4 } from "uuid";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brewery.value);
    console.log(event.target.price.value);
    console.log(event.target.abv.value);
    console.log(event.target.pintsLeft.value);
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
          type="text"
          name="pintsLeft"
          placeholder="Total Number of Pints" />
          <button type="submit">Add a Keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;