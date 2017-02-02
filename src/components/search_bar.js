import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
       super(props);
       this.state = { term: '' };
    }

    render() {
        return (
            <span>
            <div className="search-bar">
              Street:
              <input
                 value={this.state.street}
                 onChange={event => this.onInputChange(event.target.value)}
              />
            </div>
            <div className="city-bar">
              City:
              <input
                 value={this.state.city}
              />
            </div>
            <div className="state-bar">
              State:
              <input
                 value={this.state.state}
              />
            </div>
            <div className="zip-bar">
              Zip:
              <input
                 value={this.state.zip}
              />
            </div>
            </span>
        );
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;