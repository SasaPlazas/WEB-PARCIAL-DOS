import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPostQuery } from '../services/apiComments';
import { setComment } from '../redux/commentSlice';
import PostCard from '../components/postCard';
import type { RootState } from '@reduxjs/toolkit/query';



const CommentList = () => {

  const comentarios = useSelector((state: RootState) => state.comments.comments)
| const {data: apiData} = useGetPostQuery (5)

const dispatch = useDispatch(); 


 useEffect(() => {
        
if(apiData && !comments.lenght) {
    const initialComments = apiData.map(comment: any) {
        name: comments.name, 
        email: comments.email, 
        body: comments.body, 
    }
    }

    dispatch(setComment(initialComments)); 
}, [apiData, dispatch]);

  return (
    
    {comments?.map((newComment)=>
    
    <PostCard
        name={newComment.name}
        email={newComment.email}
        body={newComment.body}
    />

    )}

  )
}

export default CommentList  
