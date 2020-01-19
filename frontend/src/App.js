import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe';
import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
             <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <ul className="nav navbar-nav">
                      <li><Link to="/recipes">Recipes</Link></li>
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                      <li><Link to="/auth/sign-in">Connexion</Link></li>
                      <li><Link to="/auth/sign-up">Inscription</Link></li>
                    </ul>
                  </div> 
             </nav>
        <div className="container"> 
         <Switch>
             <Route path="/" exact component={Home}/>   
             <Route path="/recipes/:id" component={SingleRecipe} />
             <Route path="/edit/:id" exact component={EditRecipe} />
            <Route path="/recipes" component={Home} />
            <Route path="/auth/sign-in" component={SignIn}/>
            <Route path="/auth/sign-up" component={SignUp}/>
            <Route path="/new" component={CreateRecipe}/>
         </Switch>
         </div>      
        </div>
      </Router>
    );
  }
}

export default App;
