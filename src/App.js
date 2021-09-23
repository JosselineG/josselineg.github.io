import logo from './josseline.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         "My name is Josseline and I'm going to master React!"
        </p>
        <a
          className="App-link"
          href="https://github.com/JosselineG"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Check Me Out!"
        </a>
      </header>
    </div>
  );
}

export default App;
