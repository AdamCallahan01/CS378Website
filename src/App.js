import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      <header className="App-header">
        <h1>Chess But Cool</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Future platform of Wizard Chess, a program being developed by Adam and Austin
        </p>
        <a
          className="App-link"
          href="https://www.whitworth.edu/cms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitworth University
        </a>
      </header>
     </div>
  );
}

export default App;
