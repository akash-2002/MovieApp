export default function movie(state=[],action){
if(action.type==="ADD_MOVIES"){
    return action.movies;
}
return state;
}