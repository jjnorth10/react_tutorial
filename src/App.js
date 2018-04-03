import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects :[
      ]
    }
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Projects projects={this.state.projects} />

        <AddProject addProject={this.handleAddProject.bind(this)}  />
      </div>


    );
  }

  componentWillMount(){
    this.setState({
        projects :[
          {
            title: 'Business',
            category: 'Web Design'
          }

        ]
      });

  }
}



export default App;
