import React from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ' ',
    };

    this.props.handleChange = this.props.handleChange.bind(this);

  }

  

  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleChange={this.props.handleChange}/>
        <Artists artists={filteredArtists}/>

      </div>
    );
  }

}
