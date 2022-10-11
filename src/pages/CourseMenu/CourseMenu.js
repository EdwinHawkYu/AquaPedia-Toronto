
import Post from "../../components/Post/Post"

export default function CourseMenu(props){
    return(
      <main className='CourseMenu'>
        <h2>Course Menu</h2>
        {props.posts.length ?
          props.posts.map((p,idx) => <Post post={p} key={idx}/>)
          :
          <h2>No Posts!</h2>
        }
      </main>
    )
  }