import React from "react";
import ReusableKegForm from "./ReusableKegForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      brewery: event.target.brewery.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value,
      pintsLeft: event.target.pintsLeft.value,
      id: keg.id
      });
  }
  return (
    <React.Fragment>
      <ReusableKegForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText = "Update the Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;