import { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import CourseMenu from '../pages/CourseMenu/CourseMenu';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddPage from '../pages/AddPage/AddPage';

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
        <NavigationBar user={this.state.user} setUserInState={this.setUserInState}/>
        { this.state.user ?
        <>
          <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/coursemenu' element={<CourseMenu posts={this.state.posts} user={this.state.user}/>}/>
            <Route path='/addpost' element={<AddPage user={this.state.user}/>}/>
            <Route path='/course/:id' element={<DetailPage user={this.state.user}/>}/>
          </Routes>
        </>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }      
      </main>
    );
  }
}

