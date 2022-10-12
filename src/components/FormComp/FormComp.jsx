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
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(optionBody)
    }
    await fetch(`/api/course/${this.props.postID}/edit`, options)
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
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Name'
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
            <Button className="m-2" type='submit'>Edit!</Button>
          </Form>
        </Container>
      </div>
    )
  }
}