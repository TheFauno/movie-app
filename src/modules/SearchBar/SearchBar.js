import React from 'react';
import './SearchBar.css';

import SearchButton from './../SearchButton/SearchButton';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {movieName: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({movieName: event.target.value});
    }

    handleClick(event) {
        /*TO-DO */
        /*Search movie results*/
        if (this.state.movieName==='') {
            return;
        }
        alert('Película: ' + this.state.movieName);
    }

    render() {
        const searchButtonText = 'Buscar';
        return (
            <div className='searchBarContainer'>
                <h1 classNAme='app-title'>MoviesApp</h1>
                <div className='searchBar'>
                    <label>Nombre:
                        <input 
                            type = 'text' 
                            value = {this.state.movieName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <SearchButton 
                        searchButtonText={searchButtonText}
                        onClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;