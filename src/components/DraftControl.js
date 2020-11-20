import React from "react";
import NewKegForm from "./NewKegForm";
import DraftList from "./DraftList";
import KegDetail from "./KegDetail";

class DraftControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      kegFormVisibleOnPage: false,
      fullDraftList: [],
      selectedKeg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage
    }));
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.fullDraftList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg : selectedKeg});
  }

  handleAddNewKegToDraftList = (newKeg) => {
    const newFullDraftList = this.state.fullDraftList.concat(newKeg);
    this.setState({
      fullDraftList: newFullDraftList,
      kegFormVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail Keg = {this.selectedKeg} />
      buttonText = "Return to the Keg List"
    }
    else if (this.state.kegFormVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddNewKegToDraftList} />
      buttonText = "Return to the Keg List";
    } else {
      currentlyVisibleState = <DraftList draftList={this.state.fullDraftList} onKegSelection={this.handleChangingSelectedKeg} />
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