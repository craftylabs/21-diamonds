import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import GameModes from './js/game-mode';
import './css/index.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';



const routes =(
 <div>
 <BrowserRouter basename='/app'>
 <Route path='/app' component={App}/>
  </BrowserRouter>
  <BrowserRouter >
  <Route path='/gamemodes' component={GameModes}/>
  </BrowserRouter>
  
  <div>
  	<App/>
  </div>
  <div>
  	<GameModes/>
  </div>
  </div>
  );


document.addEventListener('DOMContentLoaded' , () => 
ReactDOM.render(routes, document.getElementById('root'))
);

