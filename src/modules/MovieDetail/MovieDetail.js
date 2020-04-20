import React from 'react';

import './MovieDetail.css';

import {IsFavourite, ToogleFavourite} from '../../libs/FavouriteMovieStorage';

class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false,
        };
    }

    componentDidMount() {
        /* Get favorite Data from localstorage */
        IsFavourite(this.props.movieDetail.imdbID) ? this.setState({isFavourite: true}) : this.setState({isFavourite: false})
    }

    toogleFavouriteMovie() {
        /* change state and update local storage */
        const actualPreference = this.state.isFavourite;
        ToogleFavourite(this.props.movieDetail.imdbID);
        this.setState({
            isFavourite: !actualPreference,
        });
    }

    render() {
        const movie = this.props.movieDetail;
        const ratings = movie.hasOwnProperty('Ratings') ? movie.Ratings : null;
        const hiddenLabels = ['imdbID', 'Ratings', 'Type', 'Title', 'Response', 'Poster'];
        const movieDetailsArr = Object.entries(movie)
            .filter((item) => !hiddenLabels.includes(item[0]) );

        return (
            <div className='movie-detail-box'>
                <div className='movie-detail-box-title'>{movie.Title}</div>
                {movie.Poster !== 'N/A' ?
                    <div className='poster-container'>
                        <img className='movie-poster' src={movie.Poster} alt={movie.Title}></img>
                    </div>
                    : null
                }
                {ratings == null ? null :
                    <div className='movie-detail-box-ratings'>
                        {ratings.map((rating, index) =>
                            <div className='rating-box' key={index}>{rating.Source + ': ' + rating.Value}</div>
                        )}
                    </div>
                }
                <div className="favourite-container">
                    <input
                        className={this.state.isFavourite ? 'is-favourite' : 'is-not-favourite'}
                        type='button'
                        value={this.state.isFavourite ? 'Remove from favourites' : 'Add to favourites'}
                        onClick={this.toogleFavouriteMovie.bind(this)}
                    />
                </div>
                <div className='movie-metadata'>
                    {
                        movieDetailsArr.map((item, index) =>
                            <p key={index}>{item[0] + ': ' + item[1]}</p>
                        )                    }
                </div>
            </div>
        );
    }

}

export default MovieDetail;