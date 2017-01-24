import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    placeholder="Type some text to filter videos..."
                    value={this.state.term} 
                    onChange={evt => this.onInputChange(evt.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term }); // es6 short-handed
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
