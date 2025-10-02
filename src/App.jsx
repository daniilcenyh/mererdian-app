import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
