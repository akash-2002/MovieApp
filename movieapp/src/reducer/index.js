import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SHOW_FAVOURITE,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT } from "../action";

const intimoviestate = {list:[],
    favourite:[],
    showFavourite: false
}

export function movie(state=intimoviestate,action){
// if(action.type===ADD_MOVIES){
//     return {
//         ...state,
//         list : action.movies,
//     };
// }
// return state;
switch(action.type) {
    case ADD_MOVIES:
        return {
                    ...state,
                    list : action.movies,
                };
    case ADD_FAVOURITE:
        return{
            ...state,
             favourite:[action.movie , ...state.favourite]
        }
    case REMOVE_FROM_FAVOURITE:
        {
            const filterarray=state.favourite.filter(
                movie=>movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourite:filterarray
            }
        }
        case SHOW_FAVOURITE:
        return{
            ...state,
             showFavourite:action.val
        }
        case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
        return state;
            }
        }


const initialserchstate={
    result:{},
    showSearchResults: false,
    };
export function search(state = initialserchstate,action){
    
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true,
            }
            case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
        default:
            return state;
                }
}


// const initialrootstate = {
//     movies:intimoviestate,
//     search:initialserchstate
// }

// export default function rootreducer(state={initialrootstate},action){
//     return {
//         movies: movie(state.movies,action),
//         search: search(state.search,action)
//     }
// }
export default combineReducers({
    movies:movie,
    search
});