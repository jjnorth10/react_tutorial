import React, { Component } from 'react';
import store from "../js/store/index";

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject :{

      }
    }
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault();


    console.log(this.refs.title.value);
    store.dispatch({type: "ADD_PROJECT", payload: [this.refs.title.value]});
    /*this.setState({
      newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    },function(){
        console.log(this.state);
        this.props.addProject(this.state.newProject);
    });*/

  }

  render() {
    let categoryOptions = this.props.categories.map(category =>{

      return (
          <option key={category} value={category}>{category}</option>
        )
    })

    return (
      <div >
          <h3>Add Project</h3>
          <form onSubmit= {this.handleSubmit.bind(this)}>
              <div>
                  <label>Title</label>
                  <input type="text" ref="title" />
              </div>

              <div>
                  <label>Category</label>
                  <select ref="category" >
                      {categoryOptions}
                  </select>
              </div>
              <input type="submit"/>
          </form>

      </div>
    );
  }
}

export default AddProject;
