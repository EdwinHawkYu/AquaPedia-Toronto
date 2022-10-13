import Post from "../../components/Post/Post"
import { useState, useEffect } from "react"

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
      <div className="d-flex flex-column">
        {allPosts.length ?
          // props.posts.map((p,idx) => <Post post={p} key={idx}/>)
          allPosts.map((p,idx) => <Post post={p} key={idx}/>)
          :
          <h2>No Posts!</h2>
        }
      </div>
    </main>
  )
}