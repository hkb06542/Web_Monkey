import React, { Component } from 'react';
import './App.css';
import Drawer from './UI/Drawer/Drawer';
import Header from './UI/Header/Header';
import Index from './Pages/Index';
import Footer from './UI/Footer/Footer';
import { Route,Switch } from 'react-router-dom';
import Section from './UI/Section/Section';

class App extends Component {
  
  state = {
    mainMenu : [{
    title: 'GAMES',
    link:'/gow'
    },
    {
    title: 'APP',
    link:'/'
   }],
   languages: [{
     language: 'English'
    },
    {
      language: 'Hindi'
     },
     {
      language: 'Marathi'
     },
     {
      language: 'Punjabi'
     }]
  }//state


  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
       {/*A header asection*/}
        <Header items={this.state.mainMenu}/>
        {/* side drawer in the layout */}
        <Drawer items={this.state.mainMenu}/>

        <div className="android-content mdl-layout__content">
          <a name="top">&nbsp;</a>
          <Switch>
          <Route path="/gow" exact component={Section}/>
          <Route path="/" exact component={Index} />
          </Switch>
          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
