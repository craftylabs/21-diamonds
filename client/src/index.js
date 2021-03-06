import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/App';
import GameModes from './js/game-mode';
import GamePlay from './js/game-play';
import GameResult from './js/game-result';
import Instructions from './js/instructions';
import Login from './js/login';
import Leaderboard from './js/leaderboard';

import {Provider} from 'react-redux';

import store from './store';

import './css/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';



const routes =(
 <div>
 <Provider store={store}>
 <Router>
 <div>
 <Route path='/app' component={App}/>
 <Route path='/login' component={Login} />
  <Route path='/gamemodes' component={GameModes}/>
  <Route path='/gameplay' component={GamePlay} />
  <Route path='/gameresult' component={GameResult} />
  <Route path='/instructions' component={Instructions} />
  <Route path='/leaderboard' component={Leaderboard} />
  </div>
  </Router>
  </Provider> 
  </div>
  );


document.addEventListener('DOMContentLoaded' , () => 
ReactDOM.render(

	routes

	,document.getElementById('root'))
);

