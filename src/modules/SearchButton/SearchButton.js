import React from 'react';
import { render } from '@testing-library/react';

import './SearchButton.css';

class SearchButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input 
                type = 'button' 
                value = {this.props.searchButtonText}
                onClick = {this.handleClick}
            />
        );
    }
}

export default SearchButton;