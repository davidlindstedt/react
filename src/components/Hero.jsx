import React from 'react'
import Appstore from '../assets/images/appstore.svg'
import Googleplay from '../assets/images/googleplay.svg'
import Iphone2x from '../assets/images/iphone2x.svg'
import AppstoreWhiteLogo from '../assets/images/appstore-white.svg'
import GoogleplayWhiteLogo from '../assets/images/googleplay-white.svg'

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="firstpage-container">
          <div className="left">
            <h1 id="Manage">Manage All Your <br />Money in One App</h1>

            <p className="ssm-subtitle">
              We offer you a new generation of the mobile banking.<br />
              Save, spend & manage money in your pocket.
            </p>

            <div className="knappar">
              <a className="appstore applight" href="#">
                <img src={Appstore} alt="Download on the App Store" />
              </a>
              <a class="appstore appdarkmode" href="#">
                <img src={AppstoreWhiteLogo}/>
                </a>
              <a className="googleplay applight" href="#">
                <img src={Googleplay} alt="Get it on Google Play" />
              </a>
              <a class="googleplay appdarkmode" href="#">
                <img src={GoogleplayWhiteLogo}/>
                </a>
            </div>

            <div className="discover-class">
              <button className="discover-more">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <p className="discover-text">Discover more</p>
            </div>

          </div>
              <div className="iphone2x">
                <img src={Iphone2x} />
              </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
