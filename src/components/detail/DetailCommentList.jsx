import React from "react";
import axiosComment from "../../api/axiosComment";
import DetailReCommentList from "./DetailReCommentList"

function DetailCommentList({postid}) {
    const readCommentList = async () => {
        try{
            const response = await axiosComment.get(`/${postid}/comment`,{
                withCredentials: true
            })

            const commentList = response.result;
        }
        catch(error){

        }
    }

    return (
        <section>
            {commentList?.map((each) => {
                return (
                    <div key={comment_id}>
                        {commentList.content}
                        <DetailReCommentList recommentList={commentList.recommentList}/>
                    </div>
                )
            })}
            <div>목소리 좋아요!</div>
        </section>
    );
}

export default DetailCommentList;