import React, { useRef } from "react";
import axiosComment from "../../api/axiosComment";

function DetailCommentSubmit({postid, comments, setComments}) {
    const commentInputRef = useRef();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;
        const response = await axiosComment.post(`/${postid}/comment`,{
            contents: enteredComment
        });

        const addedComment = response.data()
        setComments((prev) => ({
            ...prev, addedComment
        }))
        console.log(response);
    }

    return (
        <form action="">
            <input type="text" ref={commentInputRef} />
            <button onSubmit={onSubmitHandler}>작성</button>
        </form>
    )
}

export default DetailCommentSubmit;