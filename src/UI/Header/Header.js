import React from 'react';
// import androidlogo from '../../assets/images/android-logo.png'
const Header = (props) => {

    return (
        <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
                <span className="android-title mdl-layout-title">
                    {/* <img alt ="android-logo.png" className="android-logo-image" src={androidlogo} /> */}
                    <h3 style={{color:'#C4830A', fontFamily: 'Shadows Into Light', cursive:true}}>Web Monkey</h3>
                </span>

                <div className="android-header-spacer mdl-layout-spacer"></div>
                <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
                        <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" id="search-field" />
                    </div>
                </div>

                <div className="android-navigation-container">
                    <nav className="android-navigation mdl-navigation">
                        {
                            props.items.map((item,i)=>{
                                return <a key={i} className="mdl-navigation__link mdl-typography--text-uppercase" href="">{item.title}</a>
                            })
                        }

                    </nav>
                </div>
                <span className="android-mobile-title mdl-layout-title">
                    {/* <img alt="android-logo.png" className="android-logo-image" src={androidlogo} /> */}
                    <h3 className="android-logo-image" style={{fontSize: '27px',lineHeight: '0px', color:'#C4830A', fontFamily: 'Shadows Into Light', cursive:true}}>Web Monkey</h3>
                </span>
                <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                    <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
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