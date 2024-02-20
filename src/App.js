import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    import('./notify').then(result => result.default()); //이렇게 하면 notify가 빌드시 main으로부터 분리되어있음
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={onClick}>Hello React!</h1>
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
