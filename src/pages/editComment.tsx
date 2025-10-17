import React from 'react'
import { UseDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router' 
import { useParams } from 'react-router'
import type { RootState } from '@reduxjs/toolkit/query'
import { editComment } from '../redux/commentSlice'
import { useState } from 'react'



const editComment = () => {
//utilizamos el useParams para que al clickear editar, el navigate busque respecto al id y se edite el comentario respecto a eso
//cada campo de el form debe tener su estado con el useState


    const comentarios = useSelector((state: RootState) => state.comments.comments)
    
    //se hace un useEffect que ayude a hacer los cambios y guardarlos, asi mismo se dispara la accion con el dispatch aqui y se coloca un navigate



  return (

    //aqui debe haber un form 
    <div>editComment</div>
  )
}

export default editComment