import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        // FEATURE REQUEST Search Return Key
        this.handlePressEnter = this.handlePressEnter.bind(this);
        // FEATURE REQUEST Search onKeyUp
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

// FEATURE REQUEST Search onKeyDown

handlePressEnter(event) {
    if (event.keyCode === 13)
    this.search();
}

// FEATURE REQUEST Search onKeyUp

handleKeyPressed(event) {
    if (event.keyCode)
    this.search()
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
  onKeyUp={this.handleKeyPressed}
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