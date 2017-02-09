import React from 'react';

import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);

  }

  validateInput() {
    if (this.state.inputValue.length > 0 && this.state.inputValue.length < 16) {
      return false;
    }
    return true;
  }

  warning() {

  }

  handleChange(evt) {

    this.setState({
      inputValue: evt.target.value,
               // .value refers to text box
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render () {
    let wayTooLong;

    if (this.state.inputValue.length > 20) {
      wayTooLong = true
    } else { wayTooLong = false }

    return (
      <div>
        <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue} isDisabled={this.validateInput} warning={this.warning} wayTooLong={wayTooLong} warningMessage={'this is a warning'}/>
      </div>
    );
  }

}
