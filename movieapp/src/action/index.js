// {
//     type:"ADD_MOVIES",

// }
// {
//     type:"DECREASE_COUNT",
// }
//action type variable
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVORITE";
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
//action creaters
export function addmovies(movies){
    return {
        type:'ADD_MOVIES',
        movies
  
      }
}
export function addfavourite(movie){
  return {
      type:'ADD_FAVOURITE',
      movie

    }
}
export function removefromfavorite(movie){
  return{
    type:REMOVE_FROM_FAVOURITE,
    movie
  }
}
export function showfavorite(val){
  return{
    type:SHOW_FAVOURITE,
    val
  };
}
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `https://www.omdbapi.com/?apikey=9dd8e47&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log('movie', movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}

