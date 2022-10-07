// {
//     type:"ADD_MOVIES",

// }
// {
//     type:"DECREASE_COUNT",
// }
//action type variable
export const ADD_MOVIES = "ADD_MOVIES";

//action creaters
export function addmovies(movies){
    return {
        type:'ADD_MOVIES',
        movies
  
      }
}