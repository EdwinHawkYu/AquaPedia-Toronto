import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

export default class FormComp extends Component{
  state = {
    name: this.props.post.name,
    level: this.props.post.level,
    description: this.props.post.description,
    price: this.props.post.price,
    date: this.props.post.date
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
    let jwt = localStorage.getItem('token')
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer '+jwt
      },
      body: JSON.stringify(optionBody)
    }
    await fetch(`/api/course/${this.props.postID}/edit`, options)
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
    
    this.props.navigateTo('/coursemenu')
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
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Label>Level</Form.Label>
            <Form.Control
              type='level'
              name='level'
              value={this.state.level}
              onChange={this.handleChange}
              required
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='description'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
              required
            />            
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='price'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='date'
              name='date'
              onChange={this.handleChange}
              required
            />
            </Form.Group>            
            <Button className="m-2" type='submit'>Save Changes!</Button>
          </Form>
        </Container>
      </div>
    )
  }
}