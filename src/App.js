import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tourism from './components/Tourism';
import Logistics from './components/Logistics';
import Impact from './components/Impact';
// import JoinUs from './components/JoinUs';

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
      {/* <JoinUs /> */}
      {/* <Contact /> */}
      <Footer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
