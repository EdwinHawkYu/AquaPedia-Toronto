import { Component } from 'react';
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer';
import PostForm from '../components/PostForm/PostForm';
import Post from '../components/Post/Post';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import CourseMenu from '../pages/CourseMenu';


export default class App extends Component {
  render(){
    return (
      <main className="App">
        <Nav/>
        <h1>Hello</h1>
        {/* <Routes>
          <Route path='/coursemenu' element={<CourseMenu/>}/>
        </Routes> */}
        <Post/>
        <PostForm/>
        <Footer/>
      </main>
    );
  }
}

