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
        alert('Buscar: ' + this.state.movieName);
    }

    render() {
        const searchButtonText = 'Buscar';
        return (
            <div>

                <label>Nombre: 
                    <input 
                        type = 'text' 
                        value = {this.state.movieName}
                        onChange={this.handleChange}
                    />
                </label>

                <SearchButton searchButtonText={searchButtonText}></SearchButton>
            </div>
        )
    }
}

export default SearchBar;