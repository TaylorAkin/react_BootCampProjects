import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DigitalClock from './Clock/DigitalClock';
import CountDownTimer from './Clock/CounterDownTimer'
import TicTac from './TicTacToe/tictac'
// import logo from './logo.svg';
// import './App.css';


class App extends React.Component {



  render() {
    return (


      <div>

        <DigitalClock />
        <CountDownTimer />
        <TicTac />
      </div>


    );
  }
}

export default App


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
