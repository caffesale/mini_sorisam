// post.js

const initialState = {
    post_list: [
        {
            username: 'name1',
            img: "img1.jpg",
            postingId: '1',
            filePath: 'fakepath',
            title: 'title1',
            intro: 'hi',
            contents: 'content1',
            cntPostLike: 5,
        },
        {
            username: 'name2',
            img: 'img2.jpg',
            postingId: '2',
            filePath: 'fakepath',
            title: 'title2',
            intro: 'hi',
            contents: 'content2',
            cntPostLike: 5,
        },
    ],
    current_post: {},
}

// Action types
const CREATEPOST = 'post/createPost';
const READPOST = 'post/readPost';
const UPDATEPOST = 'post/updatePost';
const DELETEPOST = 'post/deletePost';

// Action creators
export const createPost = (post) => {
    return { type: CREATEPOST, post };
}
export const readPost = (postId) => {
    return { type: READPOST, postId };
}
export const updatePost = (post) => {
    return { type: UPDATEPOST, post };
}
export const deletePost = (postId) => {
    return { type: DELETEPOST, postId }
}

// Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CREATEPOST: {
            const new_post_list = [...state.post_list, action.post];
            return { ...state, post_list: new_post_list };
        }
        case READPOST: {
            const target_post = state.post_list.filter((post)=>post.postingId === action.postId);
            return {...state, current_post: target_post};
        }
        case UPDATEPOST: {
            const new_post_list = state.post_list.map((post) => {
                if(post.postingId === action.post.postingId) {
                    return action.post;
                } else {
                    return post;
                }
            })
            return {...state, post_list: new_post_list};
        }
        case DELETEPOST: {
            const new_post_list = state.post_list.filter((post)=>post.postingId !== action.postId);
            return {...state, post_list: new_post_list};
        }
        default: return state;
    }
}