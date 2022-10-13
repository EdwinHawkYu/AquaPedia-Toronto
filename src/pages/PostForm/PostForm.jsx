import { Component } from "react";
import AddForm from "../../components/AddForm/AddForm";

export default class PostForm extends Component{
  state = {
    name: '',
    level: '',
    description: '',
    price: '',
    date: ''
  };

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    let optionBody = {
      name: this.state.name,
      level: this.state.level,
      description: this.state.description,
      price: this.state.price,
      date: this.state.date
    }
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(optionBody)
    }
    await fetch('/api', options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: '',
          level: '',
          description: '',
          price: '',
          date: ''
        })
      })
  }

  render(){
    return(
      <div>
        <h1>Add a New Post</h1>
        <AddForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}