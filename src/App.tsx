import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Questions from './components/Questions'
import './index.css'

function App() {


  return (<>
    <div className='container mx-auto'>
      <Header />
    </div>
    <Features />
    <div className='container mx-auto mt-16 mb-16'>
      <Questions />
    </div>

    <Footer />

  </>
  )
}

export default App
