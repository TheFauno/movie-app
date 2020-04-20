import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: '' };
    }

    handleChange(event) {
        this.setState({ searchString: event.target.value });
    }

    handleClick() {
        this.props.onSearch(this.state.searchString);
    }

    render() {
        return (
            <div className='searchBarContainer'>
                <h1 className='app-title'>MoviesApp</h1>
                <div className='searchBar'>
                    <label>Nombre:
                        <input
                            type='text'
                            onChange={this.handleChange.bind(this)}
                        />
                    </label>
                    <input
                        type='button'
                        value='Buscar'
                        onClick={this.handleClick.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;