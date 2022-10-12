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
            Level: {props.post.level}
            <br/>
            Price: ${props.post.price}
            <br/>
            Date: {props.post.date}
          </Card.Text>
          <Button as={Link} to={link} variant='primary'>Registration!</Button>
        </Card.Body>
      </Card>
    </div>
  )
}