import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosComment from "../../api/axiosComment";

function DetailComment({username, contents, postid, commentId, comments, setComments}) {
    const [modify, setModify] = useState(false);
    
    const modifyInputRef = useRef();

    async function modifyHandler(e) {
        e.preventDefault();
        const enteredModiftInput = modifyInputRef.current.value;
        const response = await axiosComment.put(`/${postid}/comment/${commentId}`, {
            contents: enteredModiftInput
        })

        console.log("modires", response);
    }

    async function deleteComment() {
        const response = await axiosComment.delete(`/${postid}/comment/${commentId}`);

        const deletedMsg = response.data;
        console.log("삭제 시도중", deletedMsg);
        setComments((comments) => {
            comments.filter(comment => comment.commntId !== deletedMsg.commntId)
        })
    }

    if (modify === false) {
        return (
            <>
                <span>{username}</span>
                <div>
                    {contents}
                    <button onClick={() => {setModify(true)}}>수정하기</button>
                    <button type="button" onClick={deleteComment}>삭제하기</button>
                </div>
            </>
        )
    }
    else{
        return (
            <form>
                <input type="text" />
                <button ref={modifyInputRef} onClick={modifyHandler}>확인</button>
            </form>
        )
    }
}

export default DetailComment;