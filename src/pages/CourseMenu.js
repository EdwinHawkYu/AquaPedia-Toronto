import {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class CourseMenu extends Component{
  render(){
    return(
      <main className='CourseMenu'>
        <h1>Course Menu</h1>
        <Card>
          <Card.Img>
          </Card.Img>
          <Card.Body>
            <Card.Title>
              Card Title
            </Card.Title>
            <Card.Text>
              Example text here for templating
            </Card.Text>
            <Button variant='primary'>Click Here!</Button>
          </Card.Body>
        </Card>
      </main>
    )
  }
}