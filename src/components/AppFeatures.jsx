import React from 'react'
import CardIphone from '../assets/images/card-iphone.svg'
import CreditCard from '../assets/images/credit-card.svg'
import Shield from '../assets/images/shield.svg'
import BarsGraphic from '../assets/images/bars-graphic.svg'
import Communiaction from '../assets/images/communication.svg'
import Wallet from '../assets/images/wallet.svg'
import Happy from '../assets/images/happy.svg'

const AppFeatures = () => {
  return (
    <section className="container">

    <div className="page2">

        <div className="card-iphone">
            <img src={CardIphone}/>
        </div>

        <h2 className="app-features">App Features</h2>

        <p className="p2-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam <br/> luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <div className="card-container">
                <div id="innehåll-1" className="innehåll">
                    <div className="app-images">
                        <img src={CreditCard}/>
                    </div>
                        <h5>Easy Payments</h5>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>                 

                <div id="innehåll-2" className="innehåll">
                    <div className="app-images">
                        <img src={Shield}/>
                        </div>
                        <h5>Data Security</h5>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsa vestibulum non. </p>
                </div>    

                <div id="innehåll-3" className="innehåll">
                    <div className="app-images">
                        <img src={BarsGraphic}/>
                        </div>
                        <h5>Cost Statistics</h5>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                </div>  
                        
                <div id="innehåll-4" className="innehåll">
                    <div className="app-images">
                        <img src={Communiaction}/>
                        </div>
                        <h5>Support 24/7</h5>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>

                <div id="innehåll-5" className="innehåll">
                    <div className="app-images">
                        <img src={Wallet}/>
                        </div>
                        <h5>Regular Cashback</h5>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>

                <div id="innehåll-6" className="innehåll">  
                    <div className="app-images">
                        <img src={Happy}/> 
                        </div>
                        <h5>Top Standards</h5>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>

            </div>

    </div>
</section>
  )
}

export default AppFeatures