import React from 'react';
const Footer = ()=>{

    return (
        <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>
    
        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">Copyright {new Date().getFullYear()}</p>
        </div>
    
        <div className="mdl-mega-footer--bottom-section">
          <a className="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
            Language
            <i className="material-icons">arrow_drop_up</i>
          </a>
          <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" htmlFor="version-dropdown">
            <li className="mdl-menu__item">English</li>
            <li className="mdl-menu__item">Hindi</li>
            <li className="mdl-menu__item">Marathi</li>
            <li className="mdl-menu__item">Punjabi</li>
          </ul>
          <a className="android-link mdl-typography--font-light" href="">Blog</a>
          <a className="android-link mdl-typography--font-light" href="">Privacy Policy</a>
        </div>
    
      </footer>
    )
}

export default Footer