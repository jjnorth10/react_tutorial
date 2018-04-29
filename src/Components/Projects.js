import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects){
      console.log(this.props.projects);
      projectItems = this.props.projects.map((project,index) =>{
        return (
          <ProjectItem key={index} project={project} />

          )
      })
    }
    return (
      <div className="Projects">
        My Projects
        {projectItems}
      </div>
    );
  }
}

export default Projects;
