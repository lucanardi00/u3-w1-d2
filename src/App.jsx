import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <header>
      <MyNavbar brandName="EpicStore"/>
      </header>
      <main bg="dark" data-bs-theme="dark">
      <img src={logo} className="App-logo" alt="logo" />
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
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
