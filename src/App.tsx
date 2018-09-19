import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import HelloStateful from './StatefulHello';

class App extends React.Component {
  public render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HelloStateful name="Lucas" enthusiasmLevel={ 2 } />
      </div>
    );
  }
}

export default App;
