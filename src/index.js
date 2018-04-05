import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }



  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {

    const element1 = (<h1>Hello New User</h1>);
    const element2 = (<h1>Welcome Back</h1>);
    return this.props.isGuest ? element1 : element2;
    /*(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );*/
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}

ReactDOM.render(
  <Clock isGuest={false} />,
  document.getElementById('root')
);



//setInterval(tick, 1000);

registerServiceWorker();
