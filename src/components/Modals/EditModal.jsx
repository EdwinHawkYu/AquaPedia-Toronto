import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormComp from '../FormComp/FormComp';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function navigateTo(route){
    navigate(route);
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
      <Button variant='info' onClick={handleShow}>
        Update Course
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post: {post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComp postID={props.postID} post={post} navigateTo={navigateTo}/>
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