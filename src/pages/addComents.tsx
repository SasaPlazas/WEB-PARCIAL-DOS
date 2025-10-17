import { useState } from 'react';
import { useDispatch, UseDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import type { Comment } from '../redux/commentSlice';
import { addComment } from '../redux/commentSlice';

const AddComents = () => {

const [name, setName] =useState()
const [email, setEmail] =useState()
const [body, setBody] =useState ()

const dispatch = useDispatch()

 function handleSubmit(e) {
    e.preventDefault();
   dispatch(addComment({name: "", email: "", body: ""}))

    navigate("/commentList"); 
  }


  return (
    <div>
    
<form>
    <input type="text" value= {name} onChange(e)=> {setName} />
  </label>
    <input type="text" value={email} onchange(e)=> {setEmail} />
    <input type="text" value={body} onchange(e)=> {setBody} />

    <button onClick={handleSubmit}>Agregar</button>

</form>
    
    </div>
  )
}

export default AddComents