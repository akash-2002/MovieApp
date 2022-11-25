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
  }
}
