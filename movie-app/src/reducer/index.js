import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SHOW_FAVOURITE } from "../action";

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
    default:
        return state;
            }
        }


const initialserchstate={
    result:{},
};
export function search(state = initialserchstate,action){
    return state;
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