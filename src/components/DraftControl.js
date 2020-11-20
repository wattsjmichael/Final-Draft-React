import React from "react";
import NewKegForm from "./NewKegForm";
import DraftList from "./DraftList";

class DraftControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      kegFormVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.kegFormVisibleOnPage){
      currentlyVisibleState = <NewKegForm />
      buttonText = "Return to the Keg List";
    } else {
      currentlyVisibleState = <DraftList />
      buttonText = "Add a Keg";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default DraftControl;