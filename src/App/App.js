import { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PostForm from '../components/PostForm/PostForm';
import Post from '../components/Post/Post';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import {Route, Routes} from 'react-router-dom'
import CourseMenu from '../pages/CourseMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  state = {
    posts:[]
  }

  // getPosts = async () => {
  //   await fetch('/api')
  //     .then(res => res.json())
  //     .then(posts => this.setState({posts}))
  // }

  // componentDidMount(){
  //   this.getPosts()
  // }

  render(){
    return (
      <main className="App">
        <NavigationBar/>
        <h1>Hello</h1>
        <Routes>
          <Route path='/coursemenu' element={<CourseMenu/>}/>
        </Routes>
        {this.state.posts.length ? this.state.posts.map(p => <Post/>) : <h2>No Posts!</h2>}
        <PostForm/>
        <Footer/>
      </main>
    );
  }
}

