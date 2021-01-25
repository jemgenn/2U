import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import ProfilePicture from './ProfilePicture.svg';
import Navigation from './Navigation/Navigation';
//import Name from './Name/Name';
//import Stats from './Stats/Stats';
//import Card from './Card/Card';
import Home from './Home/Home';
import Purchase from './Purchase/Purchase';
import Newsfeed from './Newsfeed/Newsfeed';

class App extends Component{
  render(){
    return (

      <Router>
        <div className="App">
          

          {/* The original tutorial on Routes were not working for me so I followed this tutorial https://youtu.be/Law7wfdg_ls by Dev Ed*/}

          <Navigation/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/newsfeed" component={Newsfeed}/>
            <Route path="/purchase" component={Purchase}/>
          </Switch>

        
        {/*Many of these are commented out because I didn't want to permanently delete them incase Route didn't work and needed the proof of single web page working*/}

        {/*<Navigation/>

        <img className="ProfilePicture" src={ProfilePicture} />

        <Name>Jane Doe</Name>

        <Stats/>

        <Card title="13 minutes ago" text="Jane helped Anonymous by purchasing 2 coffees and 1 sandwich from McDonalds!"></Card>

        <Card title="12 hours ago" text="Jane helped Sarah by purchasing two hats, 1 pair of gloves, and 1 mouthwash from Walmart! Sarah would like to say 'thank you so much I have been struggling in the cold for days.'"></Card>

        <Card title="13 hours ago" text="Jane helped Thomas by purchasing 2 fries from McDonalds! Thomas would like to say 'thank you, I need something to eat.'"></Card>*/}

        </div>
      </Router>
    );
  }
}

export default App;
