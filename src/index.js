import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDwMZ8d7KNq8IlghCcnXzQClLXIzlxULuQ"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'hiphop' }, (videos) => {
            this.setState({ videos }) // shorthanded es6
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));
