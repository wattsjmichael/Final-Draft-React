import React from "react";
import PropTypes from "prop-types";

function ReusableKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
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
          placeholder="Alcohol Content %" />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Pints in the Keg" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  
};

export default ReusableKegForm;