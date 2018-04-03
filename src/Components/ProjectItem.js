import React, { Component } from 'react';

class ProjectItem extends Component {

  handleDelete(e){
    e.preventDefault();


    console.log(this.refs.title.value);
    this.setState({
      newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    },function(){
        console.log(this.state);
        this.props.deleteProject(this.state.newProject);
    });
  }


  render() {
  	console.log(this.props.project);
    return (
      <li className="Projects">
        {this.props.project.title} - {this.props.project.category}
        <a href="#" onClick={this.handleDelete.bind(this)}></a>
      </li>


    );
  }
}

export default ProjectItem;
