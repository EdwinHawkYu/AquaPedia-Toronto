import { Form, Container, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function AddForm(props){
  const navigate = useNavigate();

  async function updateThings(){
    await props.handleSubmit
  }

  return(
    <div className="AddForm">
    <Container>
    <Form onSubmit={props.handleSubmit}>
      <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type='name'
        name='name'
        placeholder='Name'
        autoComplete='nope'
        onChange={props.handleChange}
        required
      />
      <Form.Label>Level</Form.Label>
      <Form.Control
        type='level'
        name='level'
        placeholder='Level'
        onChange={props.handleChange}
        required
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        type='description'
        name='description'
        placeholder='Description'
        onChange={props.handleChange}
        required
      />
      <Form.Label>Price</Form.Label>
      <Form.Control
        type='price'
        name='price'
        placeholder='Price'
        onChange={props.handleChange}
        required
      />
      <Form.Label>Date</Form.Label>
      <Form.Control
        type='date'
        name='date'
        placeholder='Date'
        onChange={props.handleChange}
        required
      />
      </Form.Group>            
      <Button className="m-2" type='submit'>Add Posting!</Button>
    </Form>
  </Container>
    </div>
  )
}