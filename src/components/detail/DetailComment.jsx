import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosComment from "../../api/axiosComment";

function DetailComment({username, contents, postid, comments, setComments}) {
    const [modify, setModify] = useState(false);
    const { cmntId } = useParams();
    const modifyInputRef = useRef();

    async function modifyHandler() {
        const enteredModiftInput = modifyInputRef.current.value;
        const response = await axiosComment.put(`/${postid}/comments/${cmntId}`, {
            contents: enteredModiftInput
        })
        console.log(response);
    }

    async function deleteComment() {
        const response = await axiosComment.delete(`/${postid}/comments/${cmntId}`);
        // 데이터일지는 확인해봐야함
        // const deletedMsg = response.data;
        // setComments((comments) => {
        //     comments.filter( comments.commntId !== deletedMsg.commntId)
        // })
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
                <button ref={modifyInputRef} onClick={modifyHandler}>수정하기</button>
            </form>
        )
    }
}

export default DetailComment;