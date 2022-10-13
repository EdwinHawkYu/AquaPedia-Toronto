import Post from "../../components/Post/Post"
import { useState, useEffect } from "react"

export default function CourseMenu(props){

  const [allPosts, setAllPosts] = useState({})

  useEffect(()=>{
    async function getPosts(){
      await fetch('/api')
        .then(res => res.json())
        .then(posts => {
          setAllPosts({allPosts: posts})
        })
    }

    getPosts()

  }, [])

  return(
    <main className='CourseMenu'>
      <h2>Course Menu</h2>
      <div className="d-flex">
        {props.posts.length ?
          // props.posts.map((p,idx) => <Post post={p} key={idx}/>)
          props.posts.map((p,idx) => <Post post={p} key={idx}/>)
          :
          <h2>No Posts!</h2>
        }
      </div>
    </main>
  )
}