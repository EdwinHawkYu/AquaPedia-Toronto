import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import EditModal from "../../components/Modal/EditModal";

export default function DetailPage(props){

  const [post, setPost] = useState({
    name: '',
    level: '',
    price: '',
    date: ''
  })
  const postID = useParams();

  useEffect(()=>{
    async function getDetails(){
      await fetch('/api/course/'+postID.id)
        .then(res => res.json())
        .then(data => {
          setPost({
            name: data.name,
            level: data.level,
            price: data.price,
            date: data.date
          })
        })
    }
    getDetails()
  }, [])

  const deletePost = async (id) =>{
    const options = {
      method: 'delete'
    }
    await fetch('/api/course/'+id, options)
      .then(res =>res.json())
      .then(result => {
        console.log(result)
      })
  }

  return(
    <main className="DetailPage">
      <h2>Details Pages </h2>
      <div className="d-flex justify-content-center">
        <Card className='text-center' style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>
            <h3>{post.name}</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.level}</Card.Subtitle>
          <Card.Text>
            Insert Description Here
          </Card.Text>
          <ListGroup>
            <ListGroup.Item>
              <div className="fw-bold">Price:</div>
              {post.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="fw-bold">Course Date:</div>
              {post.date}
            </ListGroup.Item>
          </ListGroup>
          <br/>
          <Button className='m-2' as={Link} to="">Book Course!</Button>
          <Button onClick={()=>deletePost(postID.id)} type='submit' className='m-2'>
            Delete Course
          </Button>
          <Button className='m-2' as={Link} to={`/course/${postID.id}/edit`}>Edit Course</Button>
          <EditModal postID={postID.id}/>
        </Card.Body>
        </Card>            
      </div>
    </main>
  )
}