import { Component } from "react";
import AddForm from "../AddForm/AddForm";
import './PostForm.css'

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
    try{
      let optionBody = {
        name: this.state.name,
        level: this.state.level,
        description: this.state.description,
        price: this.state.price,
        date: this.state.date
      }
      let jwt = localStorage.getItem('token')
      let options = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ jwt
        },
        body: JSON.stringify(optionBody)
      }
      const fetchResponse = await fetch('/api', options)
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

    } catch (error){
      console.log(error.message)
    }
  this.props.navigateTo('/coursemenu')
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