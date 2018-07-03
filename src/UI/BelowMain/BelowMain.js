import React from 'react';
const BelowMain = (props)=>{

    return (
 <div className="android-screen-section mdl-typography--text-center">
    <a name="screens">&nbsp;</a>
    <div className="mdl-typography--display-1-color-contrast">Technology that powers you daily. . .</div>

    <div className="android-screens">
      <div className="android-wear android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/salesforce.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Salesforce</a>
      </div>

      <div className="android-tablet android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/nodejs.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">NodeJs</a>
      </div>


      <div className="android-tablet android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/react.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">React</a>
      </div>

          <div className="android-tablet android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/electron.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Electron</a>
      </div>

      <div className="android-tablet android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/python.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Python</a>
      </div>

      <div className="android-auto android-screen">
        <a className="android-image-link" href="">
          <img alt="" className="android-screen-image" src={require('../../assets/images/ml.png')}/>
        </a>
        <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase mdl-typography--text-left" href="">Machine Learning</a>
      </div>

    </div>
  </div>
    )
}

export default BelowMain

