import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Lists from './components/list';
import logo from './images/logo.svg';
import './css/App.css';
// import 'antd-mobile/dist/antd-mobile.css';


class App extends Component {
  state = {
    size: 'large',
  };
  render() {
    const size = this.state.size;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          时间紧迫
        </p>
        <Lists/>
        <Button type='primary' size={size}>ok</Button>
      </div>
    );
  }
}

export default App;
