import Post from "../../components/Post/Post"
import { useState, useEffect } from "react"
import './CourseMenu.css'

export default function CourseMenu(props){

  const [allPosts, setAllPosts] = useState({})

  useEffect(()=>{
    console.log('Update Course')
    async function getPosts(){
      await fetch('/api')
        .then(res => res.json())
        .then(posts => {
          setAllPosts(posts)
        })
    }
    getPosts()
  }, [])

  return(
    <main className='CourseMenu'>
      <h2>Course Menu</h2>
      <div className="post-container">
        {allPosts.length ?
          allPosts.map((p,idx) => <Post post={p} key={idx}/>)
          :
          <h2>No Posts!</h2>
        }
      </div>
    </main>
  )
}