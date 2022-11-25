import React from "react";
import { addfavourite, removefromfavorite } from "../action";

class Moviecard extends React.Component {
handlefavclick=()=>{
    const{movie}=this.props;
    this.props.dispatch(addfavourite(movie));
}
handleunfavclick=()=>{
    const{movie}=this.props;
    this.props.dispatch(removefromfavorite(movie));

}
    render(){
        const {movie, isfavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        isfavourite
                    ?<button className="unfavourite-btn" onClick={this.handleunfavclick}>Unfavourite</button>
                    :<button className="favourite-btn" onClick={this.handlefavclick}>Favourite</button>
                    
                
                    }
                    </div>
                    
                </div>
            </div>

        );
}

  
}

export default Moviecard;