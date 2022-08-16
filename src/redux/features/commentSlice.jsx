import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments : {
        ids: ["comment1"],
        entities: {
            "comment1": {id:comment1}
        }
    }
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentAdded(state, action){
            state.push(action.payload);
        },
        commentUpdated(state, action){
            const comment = state.find(comment => comment.id === action.payload);
            comment.contents = action.payload;
        },
        commentDeleted(state, action){
            state.comments = state.comments.filter((comment) => comment.id !== id);
        }
    }
})

export const { commentAdded, commentUpdated, commentDeleted } = commentSlice.actions;

export default commentSlice.reducer;