import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar'
import PostForm from './components/PostForm'
import * as serviceWorker from './serviceWorker';
import { Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';


const routing = (
    <Router>
      <div>
        <NavBar/>
        <br/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/newpost" component={PostForm} />
        </Switch>
      </div>
    </Router>
  )



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
