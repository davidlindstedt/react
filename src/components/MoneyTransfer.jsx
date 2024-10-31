import React from 'react'
import CheckCircle from '../assets/images/bx-check-circle.svg'
import BankBalance from '../assets/images/bank-balance-p4.svg'
import ContactsCard from '../assets/images/contacts-card.svg'
import CreditCard from '../assets/images/credit-card.svg'
import Wallet from '../assets/images/wallet.svg'

const MoneyTransfer = () => {
  return (
    <section className="container">

      <div className="page4">

        <div className="top-side">
          <div className="p4-topleft">
            <h2 id="make-money">Make your money <br /> transfer simple and clear</h2>
            <div className="lip4">
              <li className="top-left">
                <img src={CheckCircle} alt="Check circle icon" /> Banking transactions are free for you
              </li>
              <li className="top-left">
                <img src={CheckCircle} alt="Check circle icon" /> No monthly cash commission
              </li>
              <li className="top-left">
                <img src={CheckCircle} alt="Check circle icon" /> Manage payments and transactions online
              </li>
            </div>
            <div className="learn-more-classbtn">
              <a className="btn-learn-more" href="#">
                <span>Learn more <i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>

          <div className="top-right">
            <img src={BankBalance} alt="Bank balance illustration" />
          </div>
        </div>

        <div className="bottom-side">
          <div className="p4-bottomleft">
            <div>
              <img src={ContactsCard} alt="Contacts card illustration" />
            </div>
          </div>

          <div className="p4-bottomright">
            <h2 id="receive-payment">Receive payment from <br /> international bank details</h2>
            <div className="card-containerp4">
              <div id="innehåll-7" className="innehållp4">
                <div className="app-images">
                  <img src={CreditCard} alt="Credit card illustration" />
                </div>
                <p>Manage your payments online. <br /> Mollis congue egestas egestas <br /> fermentum fames.</p>
              </div>

              <div id="innehåll-8" className="innehållp4">
                <div className="app-images">
                  <img src={Wallet} alt="Wallet illustration" />
                </div>
                <p>A elementur and imperdiet enim, <br /> pretium etiam facilisi aenean <br /> quam mauris.</p>
              </div>
            </div>
            <div className="learn-more-classbtn">
              <a className="btn-learn-more" href="#">
                <span>Learn more <i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default MoneyTransfer
