import React from 'react';
// import androidlogowhite from '../../assets/images/android-logo-white.png'
const Drawer = (props) => {

    return (
        <div className="android-drawer mdl-layout__drawer">
            <span className="mdl-layout-title">
                {/* <img alt="android-logo-white" className="android-logo-image" src={androidlogowhite} /> */}
                <p className="android-logo-image" style={{fontSize:'28px', fontFamily: 'Shadows Into Light', cursive:true}}>Web Monkey</p>
            </span>
            <nav className="mdl-navigation">
            {
                            props.items.map((item,i)=>{
                                return <a className="mdl-navigation__link" key={i} href="">{item.title}</a>
                            })
                        }
                  <div className="android-drawer-separator"></div>
                <span className="mdl-navigation__link" href="">Versions</span>
                <a className="mdl-navigation__link" href="">Lollipop 5.0</a>
                <a className="mdl-navigation__link" href="">KitKat 4.4</a>
                <a className="mdl-navigation__link" href="">Jelly Bean 4.3</a>
                <a className="mdl-navigation__link" href="">Android history</a>
                
          
            </nav>
        </div>
    )

}

export default Drawer;