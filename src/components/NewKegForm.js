import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableKegForm from "./ReusableKegForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, price: event.target.price.value, abv: event.target.abv.value, pintsLeft: event.target.pintsLeft.value, id: v4()});
    
  }
  return (
    <React.Fragment>
      <ReusableKegForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add New Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;