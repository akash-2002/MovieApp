import { ADD_MOVIES } from "../action";

const intimoviestate = {list:[],
    favourite:[]
}

export default function movie(state=intimoviestate,action){
if(action.type===ADD_MOVIES){
    return {
        ...state,
        list : action.movies,
    };
}
return state;
}
