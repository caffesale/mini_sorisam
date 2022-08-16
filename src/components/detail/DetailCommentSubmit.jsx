import React, { useRef } from "react";

function DetailCommentSubmit() {
    const commentInputRef = useRef();

    function onSubmitHandler(event) {
        const enteredComment = commentInputRef.current.value;
    }
    return (
        <form action="">
            <input type="text" ref={commentInputRef} value=""/>
            <button>작성</button>
        </form>
    )
}

export default DetailCommentSubmit;