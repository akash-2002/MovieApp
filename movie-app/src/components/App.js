import '../data.js';
import { data } from '../data.js';
import Navbar from './navbar.js';
import Moviecard from './moviecard.js';
function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <div className='main'>
          <div className='tabs'>
            <div className='tab'>movies</div>
            <div className='tab'>favourites</div>

          </div>
          <div className='list'>
            {data.map((movie)=>(<Moviecard movie={movie}/>))}
          </div>

        </div>

          
    </div>
  );
}

export default App;
