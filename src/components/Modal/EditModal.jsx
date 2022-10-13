import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormComp from '../FormComp/FormComp';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditModal(props){
  const [show, setShow] = useState(false);
  const [post, setPost] = useState({
    name: '',
    level: '',
    description: '',
    price: '',
    date: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  const postID = useParams();

  async function handleSubmit2(e){
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
  }

  useEffect(()=>{
    async function getDetails(){
      await fetch('/api/course/'+postID.id)
        .then(res => res.json())
        .then(data => {
          setPost({
            name: data.name,
            level: data.level,
            description: data.description,
            price: data.price,
            date: data.date
          })
        })
    }
    getDetails()
  }, [])

  return (
    <div>
      <Button variant='secondary' onClick={handleShow}>
        Update Course
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComp postID={props.postID} post={post}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}