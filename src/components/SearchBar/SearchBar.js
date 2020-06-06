import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        // FEATURE REQUEST Search onKeyDown
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }

// FEATURE REQUEST Search onKeyDown

handlePressEnter(event) {
    if (event.keyCode === 13)
    this.search();
}


search(term) {
    this.props.onSearch(this.state.term)
}

handleTermChange(event) {
    this.setState (
            { term: event.target.value }
        )
}


    render() {
        return (
            <div className="SearchBar">
  <input 
  placeholder="Enter A Song, Album, or Artist" 
  onChange={this.handleTermChange}
  onKeyDown={this.handlePressEnter}
  />
  <button 
  className="SearchButton"
  onClick={this.search}
 
  >SEARCH</button>
</div>
        )
    }
}

export default SearchBar;