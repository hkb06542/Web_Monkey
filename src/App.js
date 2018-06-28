import React, { Component } from 'react';
import './App.css';
import Drawer from './UI/Drawer/Drawer';
import Header from './UI/Header/Header';
import Main from './UI/Main/Main';
import BelowMain from './UI/BelowMain/BelowMain';
import Footer from './UI/Footer/Footer';
import { Route } from 'react-router-dom';
import MonkeyHang from './UI/SvgAnim/MonkeyHang/MonkeyHang';

class App extends Component {
  
  state = {
    mainMenu : [{
    title: 'GAMES',
    },
    {
    title: 'APP',
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
          <Route path="/" exact component={Main} />
          <MonkeyHang />
          <BelowMain />
          
          <div className="android-wear-section">
            <div className="android-wear-band">
              <div className="android-wear-band-text">
                <div className="mdl-typography--display-2 mdl-typography--font-thin">The best of Google built in</div>
                <p className="mdl-typography--headline mdl-typography--font-thin">
                  Android works perfectly with your favourite apps like Google Maps,
                  Calendar and YouTube.
        </p>
                <p>
                  <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="">
                    See what's new in the Play Store&nbsp;<i className="material-icons">chevron_right</i>
                  </a>
                </p>
              </div>
            </div>
          </div>


          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
