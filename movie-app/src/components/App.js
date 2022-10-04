import '../data.js';
import Navbar from './navbar.js';
import Moviecard from './moviecard.js';
import React from 'react';
import { data } from '../data.js';
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
    this.props.store.dispatch({
      type:'ADD_MOVIES',
      movies:data,

    });
    console.log('STATE', this.props.store.getState());
  }
  render(){
  const movie= this.props.store.getState();
  return ( 

    <div className="App">
      <Navbar/>
      <div className='main'>
          <div className='tabs'>
            <div className='tab'>movies</div>
            <div className='tab'>favourites</div>

          </div>
          <div className='list'>
            {movie.map((movie, index)=>(<Moviecard movie={movie} key={`movies-${index}`}/>))}
          </div>

        </div>

          
    </div>
  );
  }
}

export default App;
