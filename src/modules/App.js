import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Catalog from './Catalog/Catalog';
import MovieDetail from './MovieDetail/MovieDetail';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      searchString: '',
      isDefaultResponse: true,
      selectedMovieDetails: '',
      isCatalogActive: false,
    };
  }

  componentDidMount() {
    this.getMovies(this.state.searchString);
  }

  getMovies(searchString = '') {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=896adc16&type=movie';
    this.setState({ searchString: searchString })
    if (searchString !== '') {
      url = url + '&s=' + searchString;
    }
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        if (searchString !== '' && data.Response === 'True') {
          data.Search = data.Search.filter((movie) => movie.Type === 'movie');
        }
        this.setState({ 
          isCatalogActive: true,
          apiResponse: data,
          isDefaultResponse: searchString === '' ? true : false 
        });
      })
      .catch(console.log);
  }

  callbackMovieSearch(searchString) {
    this.getMovies(searchString);
  }

  callbackSelectedDetailMovie(selectedImdbID) {
    const imdbID = (this.state.isDefaultResponse ? this.state.apiResponse : this.state.apiResponse.Search.find((movie, index) => movie.imdbID === selectedImdbID)).imdbID;
    const url = 'http://www.omdbapi.com/?apikey=896adc16&plot=full&type=movies&i=';
    fetch(url+imdbID)
      .then(res => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({
            isCatalogActive: false, 
            selectedMovieDetails: data,
          });
        }
      })
      .catch(console.log);
  }

  render() {

    const catalog = (
      <Catalog
        searchResults={this.state.apiResponse}
        searchString={this.state.searchString}
        isDefaultResponse={this.state.isDefaultResponse}
        onSelectMovie={this.callbackSelectedDetailMovie.bind(this)}
      />
    );

    const movieDetail = (
      <MovieDetail movieDetail={this.state.selectedMovieDetails} />
    );

    const contentLayout = this.state.isCatalogActive ? catalog : movieDetail

    return (
      <div>
        <SearchBar onSearch={this.callbackMovieSearch.bind(this)} />
        {contentLayout}
      </div>
    );
  }

}

export default App;
