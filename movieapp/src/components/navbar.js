import React from "react";
import { data } from "../data";
import {addMovieToList,handleMovieSearch} from "../action";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchText: '',
        };
      }
    //   handleAddToMovies = (movie) => {
    //     this.props.dispatch(addMovieToList(movie));
    //   };
    handleSearchClick = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    };
      handleSearchChange = (e) => {
        this.setState({
          searchText: e.target.value,
        });
      };
      addToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
      };
    render(){
        const { result,showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <span>{result.Released}</span>
                  
                  <button onClick={() => this.addToMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  
}
export default Navbar;