import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './Components/Temperature/Calculator';
import UncontrolledForm from './Components/Form/UncontrolledForm';
import registerServiceWorker from './registerServiceWorker';
import index from "./js/index";
import store from "./js/store/index";

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Calculator />, document.getElementById('root'));
//index.store.getState();
ReactDOM.render(<UncontrolledForm />, document.getElementById('root'));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: "ADD_ARTICLE", payload: ["new","newer"]});


/*class Clock extends React.Component {
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
);*/



//setInterval(tick, 1000);

registerServiceWorker();
