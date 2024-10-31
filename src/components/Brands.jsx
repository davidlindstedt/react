import React from 'react'
import B1 from '../assets/images/brand1.svg'
import B2 from '../assets/images/brand2.svg'
import B3 from '../assets/images/brand3.svg'
import B4 from '../assets/images/brand4.svg'
import B5 from '../assets/images/brand5.svg'
import B6 from '../assets/images/brand6.svg'




const Brands = () => {
  return (
         <section id="brands">
            <div className="container">
                <div id="brand1" className="brand-box">
                    <img src={B1}/>
                </div>
                <div id="brand2" className="brand-box">
                   <img src={B2}/>
                </div>
                <div id="brand3" className="brand-box">
                   <img src={B3}/>
                </div>
                <div id="brand4" className="brand-box">
                  <img src={B4}/>
                </div>
                <div id="brand5" className="brand-box">
                  <img src={B5}/>
                </div>
                <div id="brand6" className="brand-box">
                  <img src={B6}/>
                </div>
            </div>

        </section>

    
  )
}

export default Brands