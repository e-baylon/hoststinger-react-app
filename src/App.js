import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Our Company</h1>
  <h2>Web Site Main Ingredients:</h2>

  <p>Pages (HTML)</p>
  <p>Style Sheets (CSS)</p>
  <p>Computer Code (JavaScript)</p>
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ><p>Live Data (Files and Databases)</p></a>
        

      </header>
    </div>
  );
}

export default App;
