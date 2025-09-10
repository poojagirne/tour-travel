import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tourism from './components/Tourism';
import Logistics from './components/Logistics';
import Impact from './components/Impact';
import JoinUs from './components/JoinUs';
import Contact from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
           <Header />
      <Hero />
      {/* <Services /> */}
      <Tourism />
      <Logistics />
      <Impact />
      <JoinUs />
      {/* <Contact /> */}
      <Footer />
      </header>
    </div>
  );
}

export default App;
