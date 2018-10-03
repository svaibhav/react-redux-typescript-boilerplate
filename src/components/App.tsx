import * as React from 'react';
import './App.css';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header appTitle="Welcome to React.js" />
        <p className="App-intro">
          To get started, edit <code>src/components/App.tsx</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
