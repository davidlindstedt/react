import React from 'react'
import Iphonesx3 from '../assets/images/carousel.svg'

const Work = () => {
  return (
    <div className="page3-bgcolor">

    <section className="container">

        <div className="page3">

            <h2 className="how"> How Does It Work?</h2>

            <div className="iphone3x">
                <img src={Iphonesx3}/>
            </div>

            <h4 className="transaction-history">Latest transaction history</h4>

            <p className="p3-subtitle">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique </p>
            <p id="p3-rad2" className="p3-subtitle">quisque hac in consectetur condimentum.</p>
        </div>        

    </section>
</div>
  )
}

export default Work