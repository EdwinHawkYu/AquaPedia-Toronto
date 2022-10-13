import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Post(props){

  const link = `/course/${props.post._id}`

  return(
    <div className="post">
      <Card style={{ width: '24rem' }}>
        <Card.Img>
        </Card.Img>
        <Card.Body>
          <Card.Title>
            <Link to={link}>
              {props.post.name}
            </Link>
          </Card.Title>
          <Card.Text>
            <b>Level:</b> {props.post.level}
            <br/>
            <b>Course Description:</b> {props.post.description}
            <br/>
            <b>Price:</b> ${props.post.price}
            <br/>
            <b>Date:</b> {props.post.date}
          </Card.Text>
          <Button as={Link} to={link} variant='primary'>Registration!</Button>
        </Card.Body>
      </Card>
    </div>
  )
}