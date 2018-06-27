import React from 'react';
import androidlogo from '../../assets/images/android-logo.png'
const Header = (props) => {

    return (
        <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
                <span className="android-title mdl-layout-title">
                    <img alt ="android-logo.png" className="android-logo-image" src={androidlogo} />
                </span>

                <div className="android-header-spacer mdl-layout-spacer"></div>
                <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
                    <label className="mdl-button mdl-js-button mdl-button--icon" for="search-field">
                        <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" id="search-field" />
                    </div>
                </div>

                <div className="android-navigation-container">
                    <nav className="android-navigation mdl-navigation">
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
                        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
                    </nav>
                </div>
                <span className="android-mobile-title mdl-layout-title">
                    <img alt="android-logo.png" className="android-logo-image" src={androidlogo} />
                </span>
                <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                    <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
                    <li className="mdl-menu__item">5.0 Lollipop</li>
                    <li className="mdl-menu__item">4.4 KitKat</li>
                    <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
                    <li className="mdl-menu__item">Android History</li>
                </ul>
            </div>
        </div>
    )

}

export default Header;