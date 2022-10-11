import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Post(props){
  return(
    <div className="post">
      <Card>
        <Card.Img>
        </Card.Img>
        <Card.Body>
          <Card.Title>
            {props.post.name}
          </Card.Title>
          <Card.Text>
            Level: {props.post.level}
            <br/>
            Price: ${props.post.price}
            <br/>
            Date: {props.post.date}
          </Card.Text>
          <Button variant='primary'>Registration!</Button>
          <Button className='m-2'>Delete Course</Button>
        </Card.Body>
      </Card>
    </div>
  )
}