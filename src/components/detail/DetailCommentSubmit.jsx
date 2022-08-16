import React, { useRef } from "react";
import axiosComment from "../../api/axiosComment";

function DetailCommentSubmit({postid}) {
    const commentInputRef = useRef();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;
        const response = await axiosComment.post(`/${postid}/comment`,{
            contents: enteredComment
        },
        {
            withCredentials: true
        })

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