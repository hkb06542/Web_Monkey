import React from 'react';
const BelowMain = (props)=>{

    return (
 <div class="android-screen-section mdl-typography--text-center">
    <a name="screens">&nbsp;</a>
    <div class="mdl-typography--display-1-color-contrast">Powering screens of all sizes</div>

    <div class="android-screens">
      <div class="android-wear android-screen">
        <a class="android-image-link" href="">
          <img alt="" class="android-screen-image" src="images/wear-silver-on.png"/>
          <img alt="" class="android-screen-image" src="images/wear-black-on.png"/>
        </a>
        <a class="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Android Wear</a>
      </div>


      <div class="android-tablet android-screen">
        <a class="android-image-link" href="">
          <img alt="" class="android-screen-image" src={require('../../assets/images/nexus9-on.jpg')}/>
        </a>
        <a class="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Tablets</a>
      </div>

      <div class="android-auto android-screen">
        <a class="android-image-link" href="">
          <img alt="" class="android-screen-image" src={require('../../assets/images/auto-on.jpg')}/>
        </a>
        <a class="android-link mdl-typography--font-regular mdl-typography--text-uppercase mdl-typography--text-left" href="">Coming Soon: Android Auto</a>
      </div>

    </div>
  </div>
    )
}

export default BelowMain

