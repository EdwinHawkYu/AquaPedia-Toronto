import { useNavigate, useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import EditModal from "../../components/Modals/EditModal";

export default function DetailPage(props){

  const postID = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    name: '',
    level: '',
    description: '',
    price: '',
    date: '',
    user: ''
  })

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
            date: data.date,
            user: data.user
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

    navigate('/coursemenu')
  }

  return(
    <main className="DetailPage">
      <h2>Details Pages </h2>
      <div className="d-flex justify-content-center">
        <Card className='text-center' style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>
            <h3>{post.name}</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.level}</Card.Subtitle>
          <Card.Text>
            {post.description}
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
          {props.user._id === post.user ?
            <>
              <Button variant='danger' onClick={()=>deletePost(postID.id)} type='submit' className='m-2'>
                Delete Course
              </Button>
              <EditModal postID={postID.id}/>            
              <Button className="mt-2" as={Link} to='/coursemenu' variant='secondary'>Return to Course Menu</Button>
            </>
          :
            <Button as={Link} to='/coursemenu' variant='secondary'>Return to Course Menu</Button>
          }
        </Card.Body>
        </Card>            
      </div>
    </main>
  )
}