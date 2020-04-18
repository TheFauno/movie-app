import React from 'react';

import './SearchButton.css';

class SearchButton extends React.Component {
    render() {
        return(
            <input 
                type = 'button' 
                value = {this.props.searchButtonText}
                onClick = {()=>this.props.onClick()}
            />
        );
    }
}

export default SearchButton;