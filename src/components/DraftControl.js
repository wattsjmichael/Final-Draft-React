import React from "react";
import NewKegForm from "./NewKegForm";
import DraftList from "./DraftList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class DraftControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      kegFormVisibleOnPage: false,
      fullDraftList: [],
      selectedKeg: null,
      editing: false,
      pints: 127,
      
      
      
      
      
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSellingPint = this.handleSellingPint.bind(this);
    
  
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        kegFormVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        kegFormVisibleOnPage: !prevState.kegFormVisibleOnPage,
      }));
    }
  }
  handleSellingPint = (id) => {
    console.log(this.state.pints)
    const clone = [...this.state.fullDraftList]
    for (let i = 0; i < this.state.fullDraftList.length; i++){
      if (clone[i].id === id){
        clone[i].pintsLeft -= 1
      }
    }
    this.setState({
          fullDraftList: clone
    });
  }


  handleEditingKegInDraftList = (kegToEdit) => {
    const editedFullDraftList = this.state.fullDraftList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
    this.setState({
      fullDraftList: editedFullDraftList,
      editing: false,
      selectedKeg: null
    })
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleDeletingKeg = (id) => {
    const newFullDraftList = this.state.fullDraftList.filter(keg => keg.id !== id);
    this.setState({
      fullDraftList : newFullDraftList,
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.fullDraftList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg : selectedKeg});
  }

  handleAddNewKegToDraftList = (newKeg) => {
    const newFullDraftList = this.state.fullDraftList.concat(newKeg);
    this.setState({
      fullDraftList: newFullDraftList,
      kegFormVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInDraftList} />
      buttonText = "Return to the Draft List"
    }
    else if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick} onSellingPint = {this.handleSellingPint}/>
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