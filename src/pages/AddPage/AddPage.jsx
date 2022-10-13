import PostForm from "../../components/PostForm/PostForm";
import { useNavigate } from "react-router-dom";

export default function AddPage(props){

  const navigate = useNavigate();

  function navigateTo(route){
    navigate(route);
  }

  return(
    <>
      <PostForm navigateTo={navigateTo} user={props.user}/>
    </>
  )
}