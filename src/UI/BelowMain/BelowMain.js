import React from 'react';
const BelowMain = (props)=>{

    return (
 <div className="android-screen-section mdl-typography--text-center">
    <a name="screens">&nbsp;</a>
    <div className="mdl-typography--display-1-color-contrast">Powering screens of all sizes</div>

    <div className="android-screens">
      <div className="android-wear android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src="images/wear-silver-on.png"/>
          <img alt="" className="android-screen-image" src="images/wear-black-on.png"/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Android Wear</a>
      </div>


      <div className="android-tablet android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/nexus9-on.jpg')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Tablets</a>
      </div>

      <div className="android-auto android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/auto-on.jpg')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase mdl-typography--text-left" href="">Coming Soon: Android Auto</a>
      </div>

    </div>
  </div>
    )
}

export default BelowMain

