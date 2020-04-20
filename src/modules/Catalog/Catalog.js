import React from 'react';
import {IsFavourite} from '../../libs/FavouriteMovieStorage';
import './Catalog.css';

class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imdbId: '',
        }
    }

    selectMovie(imdbID) {
        this.props.onSelectMovie(imdbID);
    }

    render() {
        let render = '';
        if (this.props.isDefaultResponse) {
            const movie = this.props.searchResults;
            render = (
                <div className='catalog-container'>
                    <div className='movie-box' onClick={()=>this.selectMovie(movie.imdbID)}>
                        <img className='movie-poster' src={movie.Poster} alt={movie.Title}></img>
                        <div className='movie-metadata'>
                            <h3>{movie.Title}</h3>
                            <p>Año: {movie.Year}</p>
                            {
                                IsFavourite(movie.imdbID) === false ? null :
                                <p>Favourite movie</p>
                            }
                        </div>
                    </div>
                </div>
            );
        } else {
            if (this.props.searchResults.Response === 'False') {
                render = (
                    <div className='catalog-container'>
                        <p>{this.props.searchResults.Error}</p>
                    </div>
                );
            } else {
                const movies = this.props.searchResults.Search;
                render = (
                    <div className='catalog-container'>
                        <div className='results-container'>
                            <span>{'Search: ' + this.props.searchString}</span><span>{'Found: ' + movies.length + ' related movies'}</span>
                        </div>
                        <div className='movies-container'>
                            {
                                movies.map((movie, index) =>
                                <div key={index} className='movie-box' onClick={()=>this.selectMovie(movie.imdbID)}>
                                    {movie.Poster !== 'N/A'?
                                        <img className='movie-poster' src={movie.Poster} alt={movie.Title}></img>
                                        :null
                                    }                                    
                                    <div className='movie-metadata'>
                                        <h3>{movie.Title}</h3>
                                        <p>Año: {movie.Year}</p>
                                        {
                                            IsFavourite(movie.imdbID) === false ? null :
                                            <p>Favourite movie</p>
                                        }
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                );
            }
        }

        return (render);
    }
}
export default Catalog;