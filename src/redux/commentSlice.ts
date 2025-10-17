import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: string
  name: string;
  email: string; 
  body: string; 
}
type InitialState = {
  comments: Comment[];
  favorites: Comment[], 
};


const initialState: InitialState = {
  comments:[],
  favorites: []
};

export const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },

     addComment: (state, action: PayloadAction<Comment>) => {
      state.comments = [...state.comments, action.payload];
  },

   editComment: (state, action: PayloadAction<Comment>) => {
      const commentIndex = state.comments.findIndex((comment) => comment.id === action.payload.id)
      if (commentIndex !== -1){
        state.comments [commentIndex] = action.payload
      }
    }, 

    deleteComment: (state, action: PayloadAction<string>) => {
    state.comments = state.comments. filter((comment)=> comment.id !== action.payload);
    },

    toogleFavorite: (state, action: PayloadAction<Comment>) =>{
    const commentFavorite = state.favorites.findIndex((favorite) => favorite.id === action.payload.id)
    state.favorites[commentFavorite] = action.payload
    

    }
}});

export const { setComments, addComment, editComment, deleteComment } = CommentSlice.actions;
export default CommentSlice.reducer;