import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Projects from './Components/Projects';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />);
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });

  it('renders project list', function(){
    const wrapper = shallow(<App />);
    const projects = <Projects />;

  });
});
