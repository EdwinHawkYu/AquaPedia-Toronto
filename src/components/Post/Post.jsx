export default function Post(props){
  return(
    <div className="post">
      <p>{props.name}</p>
      <p>{props.level}</p>
      <p>{props.location}</p>
      <p>{props.price}</p>
      <p>{props.date}</p>
    </div>
  )
}