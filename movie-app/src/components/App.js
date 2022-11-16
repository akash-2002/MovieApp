import '../data.js';
import Navbar from './navbar.js';
import Moviecard from './moviecard.js';
import React from 'react';
import { data } from '../data.js';
import { addmovies,showfavorite } from '../action';
//import movie from '../reducer/index.js';
class App extends React.Component {
  componentDidMount(){
    //api call
    //and then dispach action over here
    //after dispact subscribe callback is called
    this.props.store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
      //is update the apllication
    })
    this.props.store.dispatch(addmovies(data));
    console.log('STATE', this.props.store.getState());
  }
  isfavourite =(movie)=>{
    const {movies}=this.props.store.getState()
    const index = movies.favourite.indexOf(movie);

    if(index!==-1){
    return true;}

    return false;
  }
  onchangeTab=(val)=>{
    this.props.store.dispatch(showfavorite(val));
  }
  render(){
    const {movies}=this.props.store.getState()
  const { list,favourite,showFavourite } = movies;
  console.log('STATE', this.props.store.getState());
  const displaymovie = showFavourite?favourite:list;
  
  return ( 

    <div className="App">
      <Navbar/>
      <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourite? '':'active-tabs'}`} onClick={()=>this.onchangeTab(false)}>movies</div>
            <div className={`tab ${showFavourite? 'active-tabs':''}`} onClick={()=>this.onchangeTab(true)}>favourites</div>

          </div>
          <div className='list'>
            {displaymovie.map((movie, index)=>(
              <Moviecard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isfavourite={this.isfavourite(movie)}
              />
              ))}
          </div>
        {displaymovie.length === 0?<div className='no-movies'>No movies to display!</div>:null}
        </div>

          
    </div>
  );
  }
}

export default App;
