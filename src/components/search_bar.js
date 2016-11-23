import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder = "Enter search term here and wait for it. . ."
          value = {this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
  );
  }

  onInputChange(term) {
    this.setState({term});
    if(!term){
      term = "SingSing";
    }
    this.props.onTermChange(term);
  }
}

export default SearchBar;
