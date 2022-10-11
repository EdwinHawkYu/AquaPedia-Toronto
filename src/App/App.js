import { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PostForm from '../components/PostForm/PostForm';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import {Route, Routes} from 'react-router-dom'
import CourseMenu from '../pages/CourseMenu/CourseMenu';
import AuthPage from '../pages/AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    user: null,
    posts:[]
  }

  setUserInState = (inc) => {
    this.setState({ user: inc})
  }

  getPosts = async () => {
    await fetch('/api')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
  }

  componentDidMount = () => {
    this.getPosts()
    let token = localStorage.getItem('token')
    if(token){
      const payload = JSON.parse(atob(token.split('.')[1]))
      if(payload.exp < Date.now()/1000){
        localStorage.removeItem('token')
        token = null
      } else {
        let user = payload.user
        this.setState({ user })
      }
    }
  }

  render(){
    return (
      <main className="App">
        <NavigationBar user={this.state.user}/>
        { this.state.user ?
        <>
          <h1>SEI Project 4</h1>
          <Routes>
            <Route path='/coursemenu' element={<CourseMenu posts={this.state.posts}/>}/>
          </Routes>
          <PostForm/>
          <Footer/>
        </>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>
    );
  }
}

