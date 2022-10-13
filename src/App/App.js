import { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PostForm from '../pages/PostForm/PostForm';
import CourseMenu from '../pages/CourseMenu/CourseMenu';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

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
          <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/coursemenu' element={<CourseMenu posts={this.state.posts}/>}/>
            <Route path='/addpost' element={<PostForm/>}/>
            <Route path='/course/:id' element={<DetailPage/>}/>
          </Routes>
        </>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }      
      </main>
    );
  }
}

