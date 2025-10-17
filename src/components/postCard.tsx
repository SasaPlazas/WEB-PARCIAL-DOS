/* import { useNavigate } from "react-router";
import { UseDispatch } from "react-redux"; */
import type {Comment} from "../redux/commentSlice"




const PostCard = (comments: Comment) => {

//se usa un handleEdit, un conclick para que cuando clickee navegue a la pagina de editar. 
//tambien se utiliza el dispatch en otro handleFavorite, cosa que cuando se clickee se agregue y el dispatch escuche la accion y la guarde en la UI. 


  return (
    
    <>
        <p>comments.name</p>
        <p>comments.email</p>
        <p>comments.body</p> 
        <button>Editar</button>
        <button>Favorito</button>       
    </>


  );
};

export default PostCard;