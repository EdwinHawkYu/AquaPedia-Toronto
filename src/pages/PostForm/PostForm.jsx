import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

export default class PostForm extends Component{
  state = {
    name: '',
    level: '',
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
          price: '',
          date: ''
        })
      })
  }

  render(){
    return(
      <div>
        <h1>Add a New Post</h1>
        <Container>
          <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Name'
              autoComplete='nope'
              onChange={this.handleChange}
              required
            />
            <Form.Label>Level</Form.Label>
            <Form.Control
              type='level'
              name='level'
              placeholder='Level'
              onChange={this.handleChange}
              required
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='price'
              name='price'
              placeholder='Price'
              onChange={this.handleChange}
              required
            />
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='date'
              name='date'
              placeholder='Date'
              onChange={this.handleChange}
              required
            />
            </Form.Group>            
            <Button className="m-2" onClick={this.handleSubmit}>Add Posting!</Button>
          </Form>
        </Container>
      </div>
    )
  }
}