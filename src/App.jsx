import './assets/css/styles2.css'
import Firstpage from './components/Firstpage'
import Brands from './components/Brands'
import AppFeatures from './components/AppFeatures'
import Footer from './components/Footer'
import Work from './components/Work'
import MoneyTransfer from './components/MoneyTransfer'
import Clients from './components/Clients'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'


function App() {


  return (
    <>
      <div className="wrapper">
        <Firstpage />
          <main>
            <Brands/>
            <AppFeatures/>
            <Work/>
            <MoneyTransfer/>
            <Clients/>
            <Faq />
            <Subscribe/>
          </main>
          <Footer />
      </div>
    </>
  )
} 

export default App