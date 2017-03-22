import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import GameModes from './js/game-mode';
import './css/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';



const routes =(
 <div>
 <Router>
 <div>
 <Route path='/app' component={App}/>
  <Route path='/gamemodes' component={GameModes}/>
  </div>
  </Router>
  </div>
  );


document.addEventListener('DOMContentLoaded' , () => 
ReactDOM.render(routes, document.getElementById('root'))
);

