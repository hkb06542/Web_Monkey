import React from 'react';

const Section = (props)=>{

    return(                  
        <div className="android-wear-section">
        <div className="android-wear-band">
          <div className="android-wear-band-text">
            <div className="mdl-typography--display-2 mdl-typography--font-thin">Best the Web can Provide</div>
            <p className="mdl-typography--headline mdl-typography--font-thin">
              Works perfectly on all devices nad platform.
            </p>
            <p>
              <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="">
                What New&nbsp;<i className="material-icons">chevron_right</i>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
}

export default Section;